import React from "react";

function Offers() {
  return (
    <section id="offers" className="container py-5">
      <div className="row gy-5">
        <div className=" col-12 col-md-6 p-5">
          <div>
            <h2 >Best Loan and Insurance Offers</h2>
            <p className="mt-4">
            We, BSECURE ADVISORY SERVICES, are direct selling agents of loans and insurance products for over 100 banks and NBFCs. Our mission is to find and offer you the best loan deals and insurance offers available, ensuring that you receive unparalleled benefits and rates that no one else can match. Trust us to secure your financial future.
            </p>
            <button type="button" class="btn btn-outline-primary">Book Now</button>


          </div>
        </div>
        <div className=" col-12 col-md-6 p-5">
            <div>
            <h2>Expert Financial Solutions Offers</h2>
          <p className="mt-4">
          Our services include housing loans, personal loans, business loans, loans against property, and life and health insurance. We specialize in finding tailored financial solutions to meet your needs, providing you with the best offers and deals. Let BSECURE ADVISORY SERVICES help you secure the financing and insurance coverage you deserve.
          </p>
          <button type="button" class="btn btn-outline-primary">Book Now</button>

            </div>
       

        </div>
      </div>
    </section>
  );
}

export default Offers;
