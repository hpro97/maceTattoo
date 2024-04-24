import React, { useState } from "react";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "9a17e695-89ef-452e-b6b3-6c579c0fbc0e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setButtonText("Sent");
      setButtonClicked(true);
      console.log("Success", res);
    } else {
      setButtonText("Failed");
      console.error("Error", res);
    }
  };

  return (
    <>
      <div id="contactSection">
        <h2 className="headerMain card headerCard" id="contactHeader">
          Contact:
        </h2>
        <div className="formContainer card" id="contactForm">
          <form onSubmit={handleClick}>
            <div className="row rowPadding rowContact">
              <div className="form-group col-md-6 formSection">
                <label className="labelName" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control formInput"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6 formSection">
                <label className="labelName" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control formInput"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="row rowPadding rowContact">
              <div className="form-group col-md-6 formSection">
                <label className="labelName" htmlFor="phone">
                  Phone:
                </label>
                <input
                  type="text"
                  className="form-control formInput"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group col-md-6 formSection">
                <label className="labelName" htmlFor="style_design">
                  Style & design:
                </label>
                <input
                  type="text"
                  className="form-control formInput"
                  id="style_design"
                  name="style_design"
                  placeholder="Style & design"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="labelName" htmlFor="details">
                Details:
              </label>
              <textarea
                className="form-control formInput"
                id="details"
                name="details"
                rows="6"
                placeholder="Please write any extra details and information"
              ></textarea>
            </div>
            <div className="row rowPadding rowContact justify-content-center">
              {!buttonClicked ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendButton"
                >
                  {buttonText}
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendButton"
                  disabled
                >
                  {buttonText}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
