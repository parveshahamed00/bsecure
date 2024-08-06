import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

function EmiCalculator() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureType, setTenureType] = useState("months");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tenureInMonths = tenureType === "years" ? tenure * 12 : tenure;
    const emiResult = calculateEMI(
      principal,
      annualInterestRate,
      tenureInMonths
    );
    setResult(emiResult);
  };

  const handleReset = () => {
    setPrincipal("");
    setAnnualInterestRate("");
    setTenure("");
    setTenureType("months");
    setResult(null);
  };
  const calculateEMI = (principal, annualInterestRate, tenureInMonths) => {
    const monthlyInterestRate = annualInterestRate / (12 * 100);
    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
    const totalPayment = emi * tenureInMonths;
    const totalInterest = totalPayment - principal;
    
    // Calculating Monthly Interest for 1 lac and Flat Annual Rate of Interest
    const monthlyInterestForOneLac = (totalInterest / (principal / 100000)) / tenureInMonths;
    const flatAnnualRate = (monthlyInterestForOneLac * 12) / 1000;
  
    return {
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      flatAnnualRate: flatAnnualRate.toFixed(2),
    };
  };

  return (
    <>
      <a onClick={handleShow}>
        EMI <i class="bi bi-calculator-fill"></i>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>EMI Calculator</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="card border-0 border-bottom border-primary shadow-sm">
            <div className="card-body">
              <figure>
                <figcaption>
                  <blockquote className="bsb-blockquote-icon mb-4">
                  <form onSubmit={handleSubmit} className="emi-calculator">
                      <div >
                        <label>
                          Loan Amount (Principal):
                          <input
                            type="number"
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Annual Interest Rate (%):
                          <input
                            type="number"
                            value={annualInterestRate}
                            onChange={(e) =>
                              setAnnualInterestRate(e.target.value)
                            }
                            required
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Loan Tenure:
                          <input
                            type="number"
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            required
                          />
                        </label>
                        {/* <div>
                          <label>
                            <input
                              type="radio"
                              value="months"
                              checked={tenureType === "months"}
                              onChange={() => setTenureType("months")}
                            />
                            Months
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="years"
                              checked={tenureType === "years"}
                              onChange={() => setTenureType("years")}
                            />
                            Years
                          </label>
                        </div> */}
                         <div class="input-group mb-3">
                <div class="form-check form-check-inline w-50">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="months"
                              checked={tenureType === "months"}
                              onChange={() => setTenureType("months")}
                  />
                  <label className="form-check-label" for="inlineRadio1">
                   {''}months
                  </label>
                </div>
                <div class="form-check form-check-inline w-50">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="years"
                              checked={tenureType === "years"}
                              onChange={() => setTenureType("years")}
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    years
                  </label>
                </div>
              </div>
                      </div>
                      <div>
                      <button type="submit" className="mb-4">Calculate</button>
                      <button type="button" onClick={handleReset}>
                        Reset
                      </button>
                      </div>
                      
                    </form>
                  </blockquote>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="card border-0 border-top border-primary shadow-sm mt-2">
            <div className="card-body">
              <figure>
                <figcaption>
                  <blockquote className="bsb-blockquote-icon mb-4">
                    
                    {result && (
                      <>
                              <h3>Monthly EMI: ₹{result.emi}</h3>
                              <h3>Total Payment: ₹{result.totalPayment}</h3>
                              <h3>
                                Total Interest Payable: ₹{result.totalInterest}
                              </h3>
                              <h2>Flat Annual Rate of Interest: {result.flatAnnualRate}%</h2>
                            </>
                    )}
                  </blockquote>
                </figcaption>
              </figure>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default EmiCalculator;
