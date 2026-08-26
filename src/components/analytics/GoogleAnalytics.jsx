import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./googleAnalytics.css";

const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-PWYTFQEX1P";
const CONSENT_KEY = "portfolio-analytics-consent";

const loadGoogleAnalytics = () => {
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.id = "google-analytics";
  document.head.appendChild(script);
};

const GoogleAnalytics = () => {
  const location = useLocation();
  const [consent, setConsent] = useState(() =>
    localStorage.getItem(CONSENT_KEY)
  );

  useEffect(() => {
    const openPreferences = () => setConsent(null);
    window.addEventListener("open-analytics-preferences", openPreferences);
    return () =>
      window.removeEventListener("open-analytics-preferences", openPreferences);
  }, []);

  useEffect(() => {
    loadGoogleAnalytics();
    const pagePath = `${location.pathname}${location.search}`;

    if (window.__lastGaPagePath === pagePath) return;
    window.__lastGaPagePath = pagePath;
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  const saveConsent = (value) => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  if (consent) return null;

  return (
    <aside
      className="analytics-consent"
      aria-label="Analytics preferences"
      role="dialog"
      aria-live="polite"
    >
      <p className="analytics-consent__text">
        I use Google Analytics to understand which pages are useful. It only
        runs if you accept. <a href="/privacy">Privacy details</a>
      </p>
      <div className="analytics-consent__actions">
        <button
          type="button"
          className="analytics-consent__button analytics-consent__button--secondary"
          onClick={() => saveConsent("rejected")}
        >
          Decline
        </button>
        <button
          type="button"
          className="analytics-consent__button analytics-consent__button--primary"
          onClick={() => saveConsent("accepted")}
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
};

export default GoogleAnalytics;
