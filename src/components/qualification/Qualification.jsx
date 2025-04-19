import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(2);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section id="evolution" className="qualification section">
      <h2 className="section__title">Evolution</h2>
      <span className="section__subtitle">Career and learning journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Section */}
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* New Full Stack Formation on the RIGHT side */}
            <div className="qualification__data">
              <div></div> {/* Empty left column */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Developer Training
                </h3>
                <span className="qualification__subtitle">
                  Technologies: Java, Spring Boot (Back-end), Angular
                  (Front-end)
                  <br />
                  Additional Skills: DevOps, Agile Methodologies
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Feb 2025 - May 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  TECHNICIEN SPÉCIALISÉ, DEVLEPMENT INFORMATIQUE
                </h3>
                <span className="qualification__subtitle">
                  ISTA TADDART AGADIR
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  BACCALAURÉAT EN SCIENCES PHYSIQUES
                </h3>
                <span className="qualification__subtitle">
                  LYCÉE QUALIFIANT AL MAJD KOUDIA
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  AKM - Kerala
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spanin - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div> */}
          </div>

          {/* Experience Section */}
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  FULL STACK WEB DEVELOPER
                </h3>
                <span className="qualification__subtitle">
                  OCEAN CONNECTING - On site
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2024 – Feb 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  FRONTEND WEB DEVELOPER / MARKETER
                </h3>
                <span className="qualification__subtitle">
                  OPTI SENT - On site
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 – Jun 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">STAGE PRÉ EMBAUCHE</h3>
                <span className="qualification__subtitle">
                  TIMNS TEC - On site
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2023 - Jun 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">STAGE FIN D&apos;ÉTUDE</h3>
                <span className="qualification__subtitle">
                  TIMNS TEC - On site
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May 2022 - Jun 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
