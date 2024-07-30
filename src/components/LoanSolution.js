import React from "react";

function LoanSolution() {
  return (
    <section id="loan-soln" className="py-5">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-5 text-center">
            <h1 className="display-2">Loan Solutions</h1>
            <img
              src={`${process.env.PUBLIC_URL}/images/loanSolution.png`}
              class="img-fluid my-5"
              alt="img"
            />
            <button>Get a Free Consultation</button>
            

          </div>
          <div className="col-12 col-md-7 d-flex align-items-center">
            <div className="row g-3 p-3">
              <div className="col-6">
                <div>
                  <i className="bi bi-house-check-fill"></i>
                  <p className="h5 my-2">HOUSING LOAN</p>
                  <p>
                    Explore our housing loan solutions tailored to meet your
                    specific requirements
                  </p>
                </div>
              </div>
              <div className="col-6">
                <i className="bi bi-person-fill-check"></i>
                <p className="h5 my-2">PERSONAL LOAN</p>
                <p>
                  Discover flexible personal loan options designed to suit your
                  individual financial needs.
                </p>
              </div>
              <div className="col-6 ">
                <i className="bi bi-briefcase-fill"></i>
                <p className="h5 my-2">BUSINESS LOAN</p>
                <p>
                  Access hassle-free business loan services to fuel your
                  entrepreneurial ventures.
                </p>
              </div>
              <div className="col-6 ">
                <i className="bi bi-bar-chart-fill"></i>
                <p className="h5 my-2">PROJECT LOAN</p>
                <p >
                Explore our project loan solutions tailored to meet your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanSolution;
