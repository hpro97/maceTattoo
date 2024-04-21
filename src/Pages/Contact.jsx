const Contact = () => {
  return (
    <>
    <div id="contactSection">
      <h2 className="headerMain card headerCard" id="contactHeader">Contact:</h2>
      <div className="formContainer card" id="contactForm">
        <form>
          <div className="row rowPadding rowContact">
            <div className="form-group col-md-6 formSection">
              <label className = "labelName" htmlFor="inputEmail4">Email:</label>
              <input
                type="email"
                className="form-control formInput"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6 formSection">
              <label className = "labelName" htmlFor="inputName4">Name:</label>
              <input
                type="name"
                className="form-control formInput"
                id="inputName4"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="row rowPadding rowContact">
            <div className="form-group col-md-6 formSection">
              <label className = "labelName" htmlFor="inputPhone4">Phone:</label>
              <input
                type="phone"
                className="form-control formInput"
                id="inputPhone4"
                placeholder="Phone"
              />
            </div>
            <div className="form-group col-md-6 formSection">
              <label className = "labelName" htmlFor="inputStyle4">Style & design:</label>
              <input
                type="Style"
                className="form-control formInput"
                id="inputStyle4"
                placeholder="Style & design"
              />
            </div>
          </div>
          <div className="form-group">
            <label className = "labelName" for="exampleFormControlTextarea1">Details:</label>
            <textarea
              className="form-control formInput"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Please write any extra details and information"
            ></textarea>
          </div>
          <div className="row rowPadding rowContact justify-content-center">
            <button type="submit" className="btn btn-primary" id="sendButton">
              Send
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;

//finish layout of form
//add functionality to send an email on click event
//add footer for email phone and insta
