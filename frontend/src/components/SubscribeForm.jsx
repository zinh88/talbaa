import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubscribeForm() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="loginForm">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h1>Subscribe</h1>
          {/*Error*/}
          <div>
            <p>
              Please enter the fillowing details to subscribe to our service
            </p>
          </div>
          <div className="form-group">
            <input type="text" name="name" id="name" placeholder="name" />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="creditCardNumber"
              id="cred"
              placeholder="credit card number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="date"
              id="date"
              placeholder="expirey date"
            />
          </div>
          <div className="form-group">
            <input type="text" name="cvv" id="cvv" placeholder="cvv" />
          </div>
          {/* <div className="forgot">Forgot password?</div> */}
          <input type="submit" value="Subscribe" />
        </div>
      </form>
    </div>
  );
}

export default SubscribeForm;
