import "./about.css";
import { about } from "../../assets/assets";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__body">
          <img
            src={about}
            alt="Mostafa Akajdid"
            className="about__portrait"
            width="280"
            height="373"
            loading="lazy"
            decoding="async"
          />

          <div className="about__narrative">
            <span className="about__label">About</span>

            <h2 className="about__heading">
              The interface is only part of the product.
            </h2>

            <p className="about__text">
              Most of my professional experience started on the frontend.
              Working that close to the interface made me curious about the
              decisions behind it&mdash;where the data comes from, how the API is
              shaped, and why the architecture changes what the user sees.
            </p>

            <p className="about__text">
              I work best with people who ask questions and share ideas. I
              don&apos;t pretend to know everything. I try to understand the
              problem first, learn what the project needs, and be useful where
              I can.
            </p>

            <p className="about__proof">
              Oracle Certified Professional &middot; Java SE 17
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
