import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";

export default function HomePage() {
  return (
    <div className="art-app art-app-onepage">
      <div className="art-mobile-top-bar" />
      <div className="art-app-wrapper">
        <div className="art-app-container">
          <Sidebar />
          <Content />
        </div>
      </div>
      <div className="art-preloader" style={{ opacity: 0, display: "none" }}>
        <div className="art-preloader-content" style={{ opacity: 1 }}>
          <h4>Krishna Sharma | Full Stack Developer</h4>
          <div
            id="preloader"
            className="art-preloader-load"
            style={{ position: "relative" }}
          >
            <svg
              viewBox="0 0 100 1.7"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%" }}
            >
              <path
                d="M 0,0.85 L 100,0.85"
                stroke="#eee"
                strokeWidth="1.7"
                fillOpacity={0}
              />
              <path
                d="M 0,0.85 L 100,0.85"
                stroke="#555"
                strokeWidth="1.7"
                fillOpacity={0}
                style={{ strokeDasharray: "100, 100", strokeDashoffset: 0 }}
              />
            </svg>
            <div
              className="progressbar-text"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                padding: 0,
                margin: 0,
                transform: "translate(-50%, -50%)",
                color: "rgb(85, 85, 85)",
              }}
            >
              100 %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
