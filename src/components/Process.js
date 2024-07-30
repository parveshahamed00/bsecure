import React from "react";

function Process() {
  return (
    <section id="process" className="py-5">
        
      <h1 className="display-2">Our Process</h1>
      <h4 className="text-center "> The Blueprint for Financial Success

</h4>

      <div className="bg mt-2">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-search"></i>
                    </div>
                    <h3 className="title">1. Analysis & Customization</h3>
                    <p className="description">
                      Understanding your financial needs and customizing
                      solutions for growth
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-toggles"></i>{" "}
                    </div>
                    <h3 className="title">2. Tailored Strategy</h3>
                    <p className="description">
                      Crafting bespoke financial strategies aligned with your
                      core objectives
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-sort-up"></i>{" "}
                    </div>
                    <h3 className="title">3. Execution Excellence</h3>
                    <p className="description">
                      Implementing impactful financial solutions for sustainable
                      results
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i class="bi bi-arrows-fullscreen"></i>{" "}
                    </div>
                    <h3 className="title">4. Ongoing Support</h3>
                    <p className="description">
                      Continuous monitoring and support to ensure financial
                      well-being
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
