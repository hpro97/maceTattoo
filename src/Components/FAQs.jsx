const FAQs = () => {
  return (
    <>
      <div className="backgroundBlack boxPadding">
        <h2>FAQs:</h2>
        <div className="accordion" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Booking process
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The easiest way is to contact me here, you can fill in the form with relevant information and i'll get back to you ASAP.
                <strong> You can also send me an email or a social media DM, but be aware they're not as heavily monitored as using my contact form </strong> 
                <a href="/Contact"><code>Click here for a link to booking</code></a>, it'll take you to the form on this webpage.
              </div>
            </div>
          </div>
          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Deposits
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                I charge a non refundable £100 deposit for new clients, as to ensure the cover of design time, set up and booking fees.
                <strong> There are exceptions to this rule for regular clients</strong>
              </div>
            </div>
          </div>
          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Pricing
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                I charge £120/hour as a standard, but notify through Instagram for deals and offers on my own flash, or for booking cancellation slots. <strong>I also do reduced pricing for larger pieces.</strong>
              </div>
            </div>
          </div>
          {/* Accordion Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Consultation process
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The consultation process consists of me responding to your booking submission, here we can discuss in further detail a time that suits you, sizing, design ideas, placement or any extra queries you may have.
              </div>
            </div>
          </div>
          {/* Accordion Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Custom designs
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                I love doing custom designs just as much as something picked from my flash sheets. Due to the nature of the work custom design pricing may vary and involves more design time, as opposed to choosing flash.
              </div>
            </div>
          </div>
          {/* Accordion Item 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                How to prep for your appointment
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Please bring ID, get a good nights sleep the day before, and eat well prior to the appointment. any extra details such as shaving or similar will be discussed during the consultation process.
              </div>
            </div>
          </div>
          {/* Accordion Item 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Parking
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Due to the location of the business in the heart of Bath, parking can be fairly limited, however the closest car park many of my clients use is "Cattle market car park" next to the Double Tree Hotel by Hilton.
              </div>
            </div>
          </div>
          {/* Accordion Item 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Aftercare
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This will be discussed on the day, should you have any queries feel free to contact me. I generally advise a non scented lotion for the healing process, washing with unscented soap and water multiple times a day. I can advise recommendations in person should you have queries or allergies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
