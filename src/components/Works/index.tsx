import ImageOne from "../../assets/images/1.jpg";
import ImageTwo from "../../assets/images/2.jpg";
import ImageThree from "../../assets/images/3.jpg";
import WorkCard, { IWork } from "./WorkCard.component";

const data: { [key: string]: IWork[] } = {
  projects: [
    {
      title: "Skillyst",
      description:
        "This is a website under foundit.in (formerly monsterindia.com) for job seekers to take skill assessments and get a badge on profile to show case the recruiters",
      imageSrc: ImageTwo,
      liveUrl: "https://www.foundit.in/skillyst/",
      className: "logos",
    },
    {
      title: "The Lash Lounge",
      description: "This project is for U.S. users for booking the salons nearest to their current location by selecting the services and appointment slots with the Stylists.",
      imageSrc: ImageThree,
      liveUrl: "https://booking-dev.thelashlounge.com/",
      className: "drawings",
    },
    {
      title: "DropperVault",
      description:
        "An e-commerce website for purchasing towels of different categories &amp; situations like Bath Towels, Beach Towels etc. It is built with React.js + Node.js using TypeScript and used MySQL for the Database.",
      imageSrc: ImageOne,
      liveUrl: "https://here-i-shop.vercel.app/",
      className: "webTemplates",
    },
  ],
};

export default function Works() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Works</h4>
            </div>
            <div className="art-right-frame">
              <div className="art-filter">
                <span style={{ cursor: "pointer" }} data-filter="*" className="art-link art-current">
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="art-grid art-grid-3-col art-gallery" style={{ position: "relative", height: "462.109px" }}>
          {data.projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
