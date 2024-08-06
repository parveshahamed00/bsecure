import React from "react";

function VisionMission() {
  return (
    <section id="vm" className="p-5">
      <div className="row  gy-4 vm-row ">
        <div className="col col-12 col-md-6">
          <h1 className="text-center mb-4">Our Vision</h1>
          <p className="lh-lg  fs-5">
            At bsecure, we envision a future where every individual and business
            can confidently achieve their financial dreams with our
            unparalleled, premium advisory services. We strive to be the beacon
            of trust and the foremost choice in credit and investment guidance,
            relentlessly reaching more people and setting the standard for
            excellence in advisory services. Our passion is to ignite financial
            empowerment, driving success and prosperity for all."
          </p>
          <button className="vm-btn mb-2">Get a Free Consultation</button>
        </div>
        <div className="col col-12 col-md-6">
          <h1 className="text-center mb-4">Our Mission</h1>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <i className="bi bi-house-check-fill"></i> HOUSING LOAN
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Explore our housing loan solutions tailored to meet your
                  specific requirements
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i className="bi bi-person-fill-check"></i> PERSONAL LOAN
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Explore our housing loan solutions tailored to meet your
                  specific requirements
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <i className="bi bi-briefcase-fill"></i>
                  BUSINESS LOAN
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Explore our housing loan solutions tailored to meet your
                  specific requirements
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <i className="bi bi-bar-chart-fill"></i> PROJECT LOAN
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Explore our housing loan solutions tailored to meet your
                  specific requirements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
