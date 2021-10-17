import ImageOne from "../../assets/images/1.jpg";
import ImageTwo from "../../assets/images/2.jpg";
import ImageThree from "../../assets/images/3.jpg";
import WorkCard, { IWork } from "./WorkCard.component";

const data: { [key: string]: IWork[] } = {
  projects: [
    {
      title: "The Towels Company",
      description:
        "An e-commerce website for purchasing towels of different categories &amp; situations like Bath Towels, Beach Towels etc. It is built with React.js + Node.js using TypeScript and used MySQL for the Database.",
      imageSrc: ImageOne,
      liveUrl: "http://128.199.79.197:8080/",
      className: "webTemplates",
    },
    {
      title: "Quality Home Images",
      description:
        "A platform for users to book photographers for photo-shoot or video-shoot at their site for any kind of occation like birthday party. I built back-end of this project in Node.js with ExpressJS framework, integrated AWS S3 for the uploaded images and Firebase for Google/Facebook authentication.",
      imageSrc: ImageTwo,
      liveUrl: "http://qhimedia.com/",
      className: "logos",
    },
    {
      title: "Real-Time Chat App",
      description:
        "This is a chat application where users can create &amp; join same Room to chat with one - another in real-time. I built this project with Socket.io Library for Node.js for WebSocket Protocol.",
      imageSrc: ImageThree,
      liveUrl: "https://krishnasharmars-chat-app.herokuapp.com/",
      className: "drawings",
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
          {data.projects.map((project, index) => (
            <WorkCard key={index + 1} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
