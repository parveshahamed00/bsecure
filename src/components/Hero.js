import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
function Hero() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState();

  return (
    <section id="hero">
      <div className="hero-txt-container p-lg-5 p-3 ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1 className=" display-6  display-lg-6 lh-base text-center">
                BSECURE CREDIT AND INVESTMENT ADVISORY SERVICES
              </h1>
              <p className="text-light p-3 text-center lh-base mb-5">
                " EMPOWERING YOUR FINANCIAL FUTURE "
              </p>
            </div>
            <div className="carousel-item">
              <h1 className=" display-6  display-lg-3 lh-base text-center ">
                {""} WE BRING THE BANKS TO YOU {""}
              </h1>

              <p className="text-light p-3 text-center lh-base w-75 mb-5 mx-auto">
                <br />
                WE ARE THE DIRECT SELLING PARTNER OF VARIOUS PRODUCTS FOR MORE
                THAN 100 BANKS & NBFCs
              </p>
            </div>
            <div className="carousel-item">
              <h1 className=" display-6  display-lg-3 lh-base text-center">
                OUR EXPERTISE AT YOUR SERVICE
              </h1>
              <p className="text-light p-3 text-center lh-base  mb-5">
                " LOAN ASSISTANCE | DEBT MANAGEMENT INSURANCE CONSULTING "
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <button type="button" className="btn btn btn-danger btn-lg mt-4">
        Get a Free Consultant
      </button> */}
      {/* model */}

      <Button
        variant="primary"
        onClick={handleShow}
        className="btn btn btn-danger btn-lg mt-4"
      >
        Get a Free Consultant
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" action="/">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Products Enquiry</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>select product</option>
                <option value="1">Personal Loan</option>
                <option value="2">Business Loan</option>
                <option value="3">Housing Loan</option>
                <option value="4">Loan Against Property</option>
                <option value="5">Loan Against Secruity</option>
                <option value="6">Auto Loan</option>
                <option value="8">Education Loan</option>
                <option value="9">Equipment Loan</option>
                <option value="10">Credit Loan</option>
                <option value="11">Life Insurance</option>
                <option value="12">Health Insurance</option>
                <option value="13">Property Insurance</option>
                <option value="14">Others</option>
              </select>
            </Form.Group>
            <br />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address with Pincode</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Occupation</Form.Label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>select occupation</option>
                <option value="1">Salaried</option>
                <option value="2">Self Employed</option>
                <option value="3">Professional</option>
                <option value="4">Others</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">
                Preferred Callback Language
              </Form.Label>
              <Form.Control type="text" placeholder="eg. Tamil" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preferred Callback Time</Form.Label>
              <div class="input-group mb-3">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    am
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    pm
                  </label>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Loan Amount</Form.Label>
              <Form.Control type="number" placeholder="eg. 100000" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Do You have CIBIL Issues?</Form.Label>
              <div className="input-group mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    No
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Maybe
                  </label>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Hero;
