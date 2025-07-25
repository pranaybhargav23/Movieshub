

import "./index.css";
import { Link, useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "../Footer";
import Header from "../Header";



const Account = () => {
  

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const onClickLogout = () => {
    console.log("Logging out...");
    Cookies.remove("jwt_token");
    
    sessionStorage.clear();
    localStorage.clear();
    console.log("Navigating to login...");
    navigate("/login");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <Header/>
      {isLoading ? (
        <div className="account-loader-container" testid="loader">
          {/* <TailSpin
            height="50"
            width="50"
            color="#D81F26"
            ariaLabel="loading"
            radius="1"
            visible={true}
          /> */}
        </div>
      ) : (
        <>
          <div className="account-container2">
            <div className="account-card">
              <h1 className="account-card-h1">Account</h1>
              <div className="account-div1"></div>
              <div className="account-div2">
                <h1 className="account-div-h1">Membership:</h1>
                <h1 className="account-div-h2">rahul@gmail.com</h1>
              </div>
              <div className="account-div2">
                <h1 className="account-div-h1">Password:</h1>
                <h1 className="account-div-h2">***********</h1>
              </div>
              <div className="account-div1"></div>
              <div className="account-div2">
                <h1 className="account-div-h1">Plan Details:</h1>
                <h1 className="account-div-h2">Premium</h1>
                <button className="account-btn1">Ultra HD</button>
              </div>
              <button onClick={onClickLogout} className="account-btn2">
                Logout
              </button>
            </div>
            
          </div>
        </>
      )}
      <div className="account-container3">
        <div className="account-icons-card">
          <FaGoogle color="white" className="account-icons-margin" />
          <FaTwitter color="white" className="account-icons-margin" />
          <FaInstagram color="white" className="account-icons-margin" />
          <FaYoutube color="white" className="account-icons-margin" />
        </div>
        <p className="account-p2">Contact Us</p>
      </div>
      
    </>
  );
};
export default Account;
