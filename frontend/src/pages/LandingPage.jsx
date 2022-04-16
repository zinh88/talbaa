import React from "react";
import {} from "./../LandingPage.css";
import icon from "./../icons/LandingPage.png";
import logo from "./../icons/owlimage.png";
import { useNavigate } from "react-router-dom";

function Image() {
  let size = 500;
  return <img src={icon} height={size} width={size} />;
}

function Logo() {
  let size = 60;
  return <img src={logo} height={size} width={size} />;
}

function LandingPage() {
  const textStyle = {
    margin: "auto",
    padding: "0% 5% 0% 6%",
  };

  const ImgStyle = {
    margin: "auto",
    padding: "2% 0% 5% 3%",
  };

  const LogoStyle = {
    margin: "auto",
    padding: "1% 0% 0% 6%",
  };

  const ButtonStyle = {
    margin: "auto",
    padding: "6% 0% 0% 0%",
  };
  
  let navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="grad">
      {/* Logo */}
      <div className="row" style={LogoStyle}>
        <Logo />
        <h1 className="LogoText">Talbaa</h1>
      </div>

      <div className="row">
        {/* Text Display */}
        <div className="column" style={textStyle}>
          <h1 className="LP-heading">
            Study the way you <br />
            want to
          </h1>
          <h2 className="LP-caption">
            Find a passionate community and the perfect tool in one <br />
            place
          </h2>

          {/* Buttons */}
          <div className="row" style={ButtonStyle}>
            <div className="column">
              <button className="button" onClick={() => handleClick("/signup")}>
                Sign Up
              </button>
            </div>
            <div className="column">
              <button className="button" onClick={() => handleClick("/login")}>
                Log In
              </button>
            </div>
          </div>
        </div>

        {/* Vector Display */}
        <div className="column" style={ImgStyle}>
          <Image />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
