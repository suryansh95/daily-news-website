import React from "react";

import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import SignIn from "../components/SignIn";
// import Form from "../components/Form";




const Navbar = ({ setOpen, setpop }) => {
  

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">
            <b>NDTV</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/register">
                  <button className="primary-button">
                    <b>Crypto-Live</b>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  <b>Business</b>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active " to="/entertainment">
                  <b>Entertainment</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  <b>Health</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  <b>Science</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  <b>Sports</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  <b>Technology</b>
                </Link>
              </li>
     
            </ul>

   

            <div>
              <SignIn/>
            </div>

            <div>
              <Popup />
            </div>

            
            <button onClick={() => setpop(true)} className="primary-button">
              <b> GO-Pro </b>
            </button>
          </div>
      
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
