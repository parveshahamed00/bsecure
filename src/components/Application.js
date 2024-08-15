import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Application = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [maritalStatus, setMaritalStatus] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spouseDob, setSpouseDob] = useState("");
  // -- phoneNO
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/;

    // Check if the input matches the regex
    if (regex.test(value)) {
      setPhoneNumber(value);
      setError("");
    } else {
      setError("Phone number should be 10 digits");
    }
  };
  // -- Alter PhoneNO
  const [alphoneNumber, setalPhoneNumber] = useState("");
  const [alerror, setalError] = useState("");

  const alhandlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]{0,10}$/;

    // Check if the input matches the regex
    if (regex.test(value)) {
      setalPhoneNumber(value);
      setalError("");
    } else {
      setalError("Phone number should be 10 digits");
    }
  };
  //
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };
  //
  function formSubmit(e) {
    const form = document.querySelector(".applicationForm");
    e.preventDefault();
    const formdata = new FormData(form);
    // console.log("button clicked",formdata);
    formdata.forEach((value, key) => {
      console.log(key + ": " + value);
    });
    //  code to store form data from FORM to SHEET
    // fetch(
    //   "https://script.google.com/macros/s/AKfycbyKtloFpeRwLrECOr15vRacRgv2kj31hdCBCGFgz40gR95Edr-_0KHTbDNHqCvP4I0w/exec",
    //   {
    //     mode: "no-cors",
    //     method: "POST",
    //     body: formdata,
    //   }
    // ).then((response) => {
    //   console.log("form Stored to sheet");
    // });
    // .then((data) => {
    //   console.log("Response data:", data);
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  }
  return (
    <>
      <section>
        <a onClick={() => handleShow()}>Application</a>
        <Modal show={show} onHide={() => setShow(false)} fullscreen>
          <Modal.Header closeButton>
            <Modal.Title>Application Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="applicationForm" onSubmit={(e) => formSubmit(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="Email"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>FULL NAME (As in Aadhar)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  name="Name"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>GENDER</Form.Label>
                <div class="input-group mb-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Gender"
                      id="inlineRadio1"
                      value="Female"
                      required
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Female
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Gender"
                      id="inlineRadio2"
                      value="Male"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Male
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Gender"
                      id="inlineRadio2"
                      value="Others"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Others
                    </label>
                  </div>
                </div>
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="Phone"
                  type="tel"
                  placeholder="Enter 10 digit phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  pattern="^[0-9]{10}$"
                  required
                />
                {error && (
                  <Form.Text className="text-danger">{error}</Form.Text>
                )}
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Alter Phone Number</Form.Label>
                <Form.Control
                  name="AlterPhone"
                  type="tel"
                  placeholder="Enter 10 digit phone number"
                  value={alphoneNumber}
                  onChange={alhandlePhoneNumberChange}
                  pattern="^[0-9]{10}$"
                  required
                />
                {alerror && (
                  <Form.Text className="text-danger">{alerror}</Form.Text>
                )}
              </Form.Group>
              <Form.Group>
              <Form.Label>LOAN TYPE</Form.Label>
              <select class="form-select" name="LoanType" aria-label="Default select example">
                <option selected>select product</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">
                LOAN AMOUNT NEEDED
              </Form.Label>
              <Form.Control type="number" placeholder="eg. 100000" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>MOTHER NAME</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>MARITAL STATUS</Form.Label>
              <select className="form-select" aria-label="Default select example" onChange={handleMaritalStatusChange}>
                <option selected>select status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </Form.Group>
            {maritalStatus === 'married' && (
          <>
           <Form.Group>
           <Form.Label className='mt-3'>SPOUSE NAME</Form.Label>
           <Form.Control type="text" placeholder="name" value={spouseName}
                  onChange={(e) => setSpouseName(e.target.value)} />

           </Form.Group>
            
           <Form.Group >
           <Form.Label className='mt-3'>SPOUSE DOB</Form.Label>
           <Form.Control type="date" value={spouseName}
                  onChange={(e) => setSpouseDob(e.target.value)} />
           </Form.Group>
           <Form.Group>
           <Form.Label className='mt-3'>NUMBER OF DEPANDANTRS</Form.Label>
           <Form.Control type="number" placeholder="name" value={spouseName}
                  onChange={(e) => setSpouseDob(e.target.value)} />
           </Form.Group>
          </>
        )}
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">
            RELIGION
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CATEGORY</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                COMPANY NAME
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                DESIGNATION
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                PURPOSE OF LOAN
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                EXPERINCE IN CURRENT JOB
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                TOTAL/ OVERALL JOB EXPERIENCE
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>OFFICE ADDRESS</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                OFFICE ADDRESS LANDMARK
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                OFFICE PINCODE
              </Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>OFFICIAL MAIL ID (For Quick and hassle-free employment Verification)</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>CURRENT RESIDENCE</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
              <div class=" d-flex justify-content-end">
                <button class="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Application;
