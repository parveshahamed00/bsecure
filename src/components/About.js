import React from "react";

function About() {
  return (
    <section id="about" className="pb-5">
      <div className="container">
        <h1 className="text-center display-4 py-5">About Us</h1>
        <div className="row">
          <div className="col-12 col-md-5 order-md-1 order-2">
            <img
              src={`${process.env.PUBLIC_URL}/images/about.png`}
              class="img-fluid"
              alt="img"
            />
          </div>
          <div className="col col-md-7 order-md-2 order-1">
            <div>
              <h1 className="display-3">Our Journey in Financial Advisory</h1>
              <h2 className="py-3 ">Discover how we became leaders in providing financial advisory and loan agency services.</h2>
              <p>
                Our Journey in Financial Advisory Discover how we became leaders
                in providing financial advisory and loan agency services. We,
                BSECURE ADVISORY SERVICES, specialize in finding unique
                financial solutions for individuals and businesses. Our
                expertise and experience enable us to craft tailored financial
                products and services that align with your core financial
                objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0360bc" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,117.3C672,85,768,75,864,85.3C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  );
}

export default About;
