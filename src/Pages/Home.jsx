import MaceTattooing from "../../public/maceTattooing.jpg";
import AboutMe from "../Components/AboutMe";
import Testimonials from "../Components/Testimonials";
import FAQs from "../Components/FAQs";

const Home = () => {
  return (
    <>
      <div className="imgContainer">
        <img
          src={MaceTattooing}
          alt="Mace Tattooing black and grey candid shot"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div className="headerContainer">
        <h1 className="landingHeader">Mace Tattoo</h1>
      </div>
      <hr />
      <AboutMe />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;

//import pic of mace