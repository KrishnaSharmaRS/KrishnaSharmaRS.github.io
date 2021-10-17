import DownloadResume from "../DownloadResume";

export default function Info() {
  return (
    <div
      id="scrollbar2"
      className="art-scroll-frame"
      data-scrollbar="true"
      tabIndex={-1}
      style={{ overflow: "hidden", outline: "none" }}
    >
      <div className="scroll-content py-2">
        <div className="art-table p-15-15">
          <ul>
            <li>
              <h6>Residence:</h6>
              <span>INDIA</span>
            </li>
            <li>
              <h6>City:</h6>
              <span>Noida</span>
            </li>
            <li>
              <h6>Age:</h6>
              <span>22+</span>
            </li>
          </ul>
        </div>
        <div className="art-ls-divider" />
        <div className="art-hard-skills pt-2">
          <div className="art-hard-skills-item mb-2">
            <div className="text-center">
              <h4>SKiLLS</h4>
            </div>
            <div className="art-line-progress">
              <div id="lineprog1" />
            </div>
          </div>
          <div className="art-ls-divider mb-2" />
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JavaScript</h6>
            </div>
            <div className="art-line-progress">
              <div id="lineprog1" />
            </div>
          </div>
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              <h6>TypeScript</h6>
              <h6>React.js</h6>
              <h6>Node.js</h6>
            </div>
            <div className="art-line-progress">
              <div id="lineprog2" />
            </div>
          </div>
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              <h6>DBMS</h6>
              <h6>SQL</h6>
              <h6>NoSQL</h6>
            </div>
            <div className="art-line-progress">
              <div id="lineprog3" />
            </div>
          </div>
          <div className="art-hard-skills-item">
            <div className="art-skill-heading">
              <h6>ExpressJS</h6>
              <h6>NextJS</h6>
              <h6>NestJS</h6>
            </div>
            <div className="art-line-progress">
              <div id="lineprog4" />
            </div>
          </div>
        </div>
        <div className="art-ls-divider" />
        <ul className="art-knowledge-list p-15-0">
          <li>Bootstrap</li>
          <li>Sass</li>
          <li>Redux</li>
          <li>AWS S3</li>
          <li>Firebase</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere Pro</li>
        </ul>
        <div className="art-ls-divider" />
        <div className="art-links-frame p-15-15">
          <DownloadResume />
        </div>
      </div>
      <div
        className="scrollbar-track scrollbar-track-x"
        style={{ display: "none" }}
      >
        <div
          className="scrollbar-thumb scrollbar-thumb-x"
          style={{
            width: 230,
            transform: "translate3d(0px, 0px, 0px)",
          }}
        />
      </div>
      <div
        className="scrollbar-track scrollbar-track-y"
        style={{ display: "block" }}
      >
        <div
          className="scrollbar-thumb scrollbar-thumb-y"
          style={{
            height: "105.601px",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        />
      </div>
    </div>
  );
}
