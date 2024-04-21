const Contact = () => {
  return (
    <>
      <h2 className="headerMain card headerCard" id="contactHeader">Contact:</h2>
      <div className="formContainer card" id="contactForm">
        <form>
          <div className="row rowPadding">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email:</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputName4">Name:</label>
              <input
                type="name"
                className="form-control"
                id="inputName4"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="row rowPadding">
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone4">Phone:</label>
              <input
                type="phone"
                className="form-control"
                id="inputPhone4"
                placeholder="Phone"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputStyle4">Style & design:</label>
              <input
                type="Style"
                className="form-control"
                id="inputStyle4"
                placeholder="Style & design"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Details:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Please write any extra details and information"
            ></textarea>
          </div>
          <div className="row rowPadding justify-content-center">
            <button type="submit" className="btn btn-primary" id="sendButton">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

//finish layout of form
//add functionality to send an email on click event
//add footer for email phone and insta
