import React from "react";

const AboutUsNav = () => {
  return (
    <section id="about-readmore">
      <h1>ABOUT US</h1>
      <div className="row img-row">
        <div className="col">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutUsNav.png`}
            class="img-fluid my-5"
            alt="img"
          />
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
};

export default AboutUsNav;
