import React from "react";

function About() {
  return (
    <section id="about" className="pb-5">
      <div className="container">
        <h1 className="text-center display-4 py-5">About Us</h1>
        <div className="row">
          {/* <div className="col-12 col-md-5 order-md-1 order-2">
            <img
              src={`${process.env.PUBLIC_URL}/images/about.png`}
              className="img-fluid"
              alt="img"
            />
          </div> */}
          <div className="col col-md-12 order-md-2 order-1">
            <div>
              <h1 className="display-3">Our Journey in Financial Advisory</h1>
              <h2 className="py-3 ">
                Wondering how we revolutionized the industry of financial
                advisory?
              </h2>
              <div className=" row">
                <div className="col-md-8"> 
                <p>
                Our journey in financial advisory began with a mission to
                empower individuals and businesses across all income levels and
                credit profiles. At Bsecure Advisory Services Private Limited,
                founded by Solomon Arputha Kumar, we excel in delivering bespoke
                financial solutions tailored to your unique needs. With our
                extensive network of over 100 banks and NBFCs, we provide
                unparalleled expertise in crafting financial products and
                services that align with your core objectives.
                <br />
                <br/>
                We pride ourselves on our transparent, no-fee consultation
                process, ensuring you receive honest advice and continuous
                support. Our commitment to trust and excellence helps you
                achieve your financial goals with confidence.
                </p>
                <button type="button" className="btn btn btn-light btn-lg mt-4">
       Know More
      </button>
                </div>
               <div className="col-md-4 p-5">
               <img
              src={`${process.env.PUBLIC_URL}/images/about.png`}
              className="img-fluid"
              alt="img"
            />
               </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="10"
          d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,117.3C672,85,768,75,864,85.3C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,277.3C384,288,480,288,576,266.7C672,245,768,203,864,186.7C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default About;
