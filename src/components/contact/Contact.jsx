import { useState, useCallback } from "react";
import { profile, resume } from "../../assets/assets";
import "./contact.css";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ||
  "https://email-fawn-alpha.vercel.app/api/sendEmail";
const REQUEST_TIMEOUT_MS = 10000;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [website, setWebsite] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
    setShowSuccess(false);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length > 100) {
      newErrors.name = "Name is too long";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    } else if (formData.email.trim().length > 254) {
      newErrors.email = "Email address is too long";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length > 5000) {
      newErrors.message = "Message is too long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Real visitors never fill this field. Silently accept bot submissions so
    // simple form bots do not learn how the trap works.
    if (website) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setWebsite("");
      return;
    }

    setIsLoading(true);
    setSubmitError("");
    setShowSuccess(false);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS
    );

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
        signal: controller.signal,
      });
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        error.name === "AbortError"
          ? "The request timed out. Please email me directly instead."
          : "Failed to send message. Please try again."
      );
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container">
        <div className="contact__profile">
          <img
            src={profile}
            alt="Mostafa Akajdid"
            className="contact__portrait"
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
          />
          <h2 className="contact__name">Mostafa Akajdid</h2>
          <p className="contact__role">
            Available for freelance &amp; full-time opportunities.
          </p>

          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/mostafa-akajdid/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/akajdid-mostafa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="mailto:mostafaakajdid6@gmail.com"
              className="contact__social-link"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          <p className="contact__status">Available now</p>
        </div>

        <div className="contact__card">
          <span className="contact__eyebrow">Contact</span>

          <h3 className="contact__heading">
            A few lines are enough.
          </h3>

          <p className="contact__text">
            If you&apos;re hiring, tell me about the role and the team. If you
            have a project, tell me what you&apos;re trying to solve.
          </p>

          <form
            onSubmit={handleSubmit}
            className="contact__form"
            aria-label="Contact form"
          >
            <div className="contact__honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                required
                maxLength="100"
                autoComplete="name"
                aria-describedby={errors.name ? "error-name" : undefined}
              />
              {errors.name && (
                <span id="error-name" className="contact__error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                required
                maxLength="254"
                autoComplete="email"
                aria-describedby={errors.email ? "error-email" : undefined}
              />
              {errors.email && (
                <span id="error-email" className="contact__error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                required
                maxLength="5000"
                aria-describedby={
                  errors.message ? "error-message" : undefined
                }
              />
              {errors.message && (
                <span
                  id="error-message"
                  className="contact__error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>

            {submitError && (
              <p className="contact__submit-error" role="alert">
                {submitError}
              </p>
            )}

            {showSuccess && (
              <p className="contact__success-msg" aria-live="polite">
                Your message has been sent successfully.
              </p>
            )}
          </form>

          <div className="contact__email">
            <span className="contact__email-label">Prefer email?</span>
            <a
              href="mailto:mostafaakajdid6@gmail.com"
              className="contact__email-link"
            >
              mostafaakajdid6@gmail.com
            </a>
          </div>

          <footer className="contact__footer">
            <div className="contact__footer-links">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__footer-link"
                download
              >
                Resume
              </a>
              <a href="/privacy" className="contact__footer-link">
                Privacy
              </a>
            </div>

            <span className="contact__footer-copy">
              &copy; 2026 Mostafa Akajdid. All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
