import React ,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Application = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();
    const [maritalStatus, setMaritalStatus] = useState('');
    const [spouseName, setSpouseName] = useState('');
    const [spouseDob, setSpouseDob] = useState('');

    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    const handleMaritalStatusChange = (event) => {
        setMaritalStatus(event.target.value);
      };
  return (
    <>
      <section>
      <a onClick={() => handleShow()}>
          Application
        </a>
      <Modal show={show}   onHide={() => setShow(false)} fullscreen >
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FULL NAME (As in Aadhar)</Form.Label>
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>GENDER</Form.Label>
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
                  Female
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
                    Male
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
                    Others
                  </label>
                </div>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>MOBILE NUMBER</Form.Label>
              <PhoneInput
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>ALTERNATIVE MOBILE NUMBER</Form.Label>
              <PhoneInput
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>LOAN TYPE</Form.Label>
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
          </Form>
        </Modal.Body>
      </Modal>
      </section>
    </>
  )
}

export default Application
