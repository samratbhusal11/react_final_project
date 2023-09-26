import React, { useState } from "react";
import contact1 from "./contact1.png";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`My name is ${data.fullname}. 
      My phone number is ${data.phone}. 
      My email address is ${data.email}. 
      My Subject on  ${data.subject}. 
      Here is my message I want to say: ${data.message}.`);
  };

  return (
    <section className="Contact" id="contact">
      <div className="container top">
        <div className="heading text-center">
          <h4>CONTACT</h4>
          <h1 className="text-3xl font-semibold">Contact With Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="left">
            <div className="box p-6 shadow-md">
              <div className="img">
                <img src={contact1} alt="Contact Person" />
              </div>
              <div className="details">
                <h1 className="text-2xl font-semibold">Samrat Bhusal </h1>
                <p>Chief Operating Officer</p>
                <p className="text-gray-700">
                  Available for freelancing, Website development under 2 days guranteed 
                </p>
                <p className="mt-2 text-gray-700">
                  Phone: +977 9849839669
                  <br />
                  Email: bhusalsamrat11@gmail.com
                </p>
                <div className="mt-4">
                  <span className="text-gray-700">FIND WITH ME</span>
                  <div className="button flex mt-2">
                    <button className="btn-shadow mr-4">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn-shadow mr-4">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn-shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         