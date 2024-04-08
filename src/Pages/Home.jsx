// import pic of mace, placeholder for now
import MaceTattooing from "../../public/MaceTattooing";
import AboutMe from "../Components/AboutMe";
import Testimonials from "../Components/Testimonials";
import FAQs from "../Components/FAQs";

const Home = () => {
  return (
    <div className="imgContainer">
      <img src={MaceTattooing} alt="Mace Tattooing black and grey candid shot" />
      <AboutMe />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default Home;
