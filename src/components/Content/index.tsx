import BackgroundImage from "../../assets/images/background.jpg";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer.component";
import HeaderCard from "./components/HeaderCard.component";
import Services from "../Services";
import Works from "../Works";
import EducationAndExperience from "../EducationAndExperience";

export default function Content() {
  return (
    <div className="art-content">
      <div className="art-curtain" />
      <div className="art-top-bg" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="art-top-bg-overlay" />
      </div>
      <div className="transition-fade" id="swup" data-swup={0}>
        <div id="scrollbar" className="art-scroll-frame" data-scrollbar="true" tabIndex={-1} style={{ overflow: "hidden", outline: "none" }}>
          <div className="scroll-content" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <HeaderCard />
            <Services />
            <Works />
            <EducationAndExperience />
            <ContactInfo />
            <Footer />
          </div>
          <div className="scrollbar-track scrollbar-track-x" style={{ display: "none" }}>
            <div
              className="scrollbar-thumb scrollbar-thumb-x"
              style={{
                width: 1046,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            />
          </div>
          <div className="scrollbar-track scrollbar-track-y" style={{ display: "block" }}>
            <div
              className="scrollbar-thumb scrollbar-thumb-y"
              style={{
                height: "39.2794px",
                transform: "translate3d(0px, 0px, 0px)",
                transformOrigin: "center top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
