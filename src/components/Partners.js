import React from "react";

function Partners() {
  return (
    <section id="partners" className="px-5   ">
        <h1 className="text-center display-3">
            Our Beloved Partners <i class="bi bi-chat-heart text-danger"></i>
        </h1>
      <div className="row">
       
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner-1.png`}
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-3 d-flex align-items-center"> <img
                src={`${process.env.PUBLIC_URL}/images/partner-2.png`}
                className="img-fluid "
                alt="..."
              /></div>
            <div className="col-3">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-3.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            <div className="col-3">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-4.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            <div className="col-3">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-5.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            <div className="col-3 d-flex align-items-center">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-6.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            <div className="col-3 d-flex align-items-center">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-7.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            <div className="col-3">
            <img
                src={`${process.env.PUBLIC_URL}/images/partner-8.png`}
                className="img-fluid"
                alt="..."
              /> 
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Partners;
