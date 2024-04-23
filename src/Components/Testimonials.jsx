import React from "react";
import harry from "../../public/clientHarry.jpg";
import sarah from "../../public/clientSarah.jpg";
import alex from "../../public/clientAlex.jpg";
import lily from "../../public/clientLily.jpg";
import max from "../../public/clientMax.jpg";
import jack from "../../public/clientJack.jpg";

const Testimonials = () => {
  return (
    <>
      <div
        className="backgroundWhite boxPadding card whiteText"
        id="testimonialSection"
      >
        <h2
          className="blackText headerMain card headerCard "
          id="testimonialsCard"
        >
          Testimonials:
        </h2>
        <div className="row rowTestimonial">
          <div className="col-lg-4 text-center">
            <img
              src={harry}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Harry</h3>
              <p>
                "Top geezer, nice clean crisp lines, brilliant trad and
                blackwork. Can't wait to plan the next one"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <img
              src={sarah}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Sarah</h3>
              <p>
                "Mace's traditional style is unmatched! Thrilled with my new ink
                - every line is perfection. Can't wait for round two!"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <img
              src={alex}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Alex</h3>
              <p>
                "Huge shoutout to Mace for his stellar traditional work! My
                tattoo is a true masterpiece. Already planning my next piece
                with him!"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
        </div>
        {/* {row rowTestimonial} */}
        <div className="row rowTestimonial">
          <div className="col-lg-4 text-center">
            <img
              src={lily}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Lily</h3>
              <p>
                "Mace nailed it with my traditional tattoo! His attention to
                detail is incredible. Highly recommend him for classic ink!"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <img
              src={max}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Max</h3>
              <p>
                "Massive thanks to Mace for his exceptional traditional skills!
                My tattoo is exactly what I envisioned. A true artist!"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
          <div className="col-lg-4 text-center">
            <img
              src={jack}
              alt="profile image of a person"
              width="140"
              height="140"
              style={{ borderRadius: "50%", marginTop: "0.4rem" }}
            />
            <div className="backgroundBlack boxPadding rounded-4 testimonial-box">
              <h3 className="fw-normal headerSub yellow">Jack</h3>
              <p>
                "Big ups to Mace for his traditional craftsmanship! My tattoo is
                beyond amazing. Can't wait to add more of his work to my
                collection!"
              </p>
            </div>
          </div>
          {/* /.col-lg-4 */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;

// add client pics
// replace content
