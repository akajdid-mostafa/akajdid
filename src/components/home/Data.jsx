const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Mostafa Akajdid</h1>
      <span className="home__subtitle">Full-Stack Developer</span>
      <p className="home__main-statement">
        I like starting with what the user needs, then working through the
        interface, the API, and the data behind it.
      </p>
      <p className="home__supporting">
        Most of my experience began on the frontend. Curiosity is what pulled
        me into the rest of the product.
      </p>

      <div className="home__cta">
        <a href="#contact" className="button button--flex">
          Get in Touch
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
        <a href="#case-studies" className="home__cta-secondary">
          Explore My Work
          <span className="home__cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Data;
