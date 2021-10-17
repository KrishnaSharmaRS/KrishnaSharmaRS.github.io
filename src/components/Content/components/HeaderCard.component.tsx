import BackgroundImage from "../../../assets/images/background.jpg";
import ProfilePicturePNG from "../../../assets/images/profile-picture.png";

export default function HeaderCard() {
  return (
    <div className="container-fluid">
      <div className="row p-60-0 p-lg-30-0 p-md-15-0">
        <div className="col-lg-12">
          <div className="art-a art-banner" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="art-banner-back" />
            <div className="art-banner-dec" />
            <div className="art-banner-overlay">
              <div className="art-banner-title">
                <h1 className="mb-15">
                  Who am I ?<br />I am a self taught Full Stack Developer
                </h1>
                <div className="art-lg-text art-code mb-25">
                  &lt;<i>code</i>&gt; {"I build "}
                  <span
                    className="txt-rotate"
                    data-period={2500}
                    data-rotate='[ "websites with React.js + Node.js.", "Android & iOS apps with React Native.", "beautiful designs with SCSS & Bootstrap."]'
                  >
                    <span className="wrap">beautiful web designs with SCSS &amp; Bootstrap</span>
                  </span>
                  &lt;/<i>code</i>&gt;
                </div>
                <div className="art-buttons-frame">
                  <a href="mailto:KrishnaSharmaRS@hotmail.com" className="art-btn art-btn-md">
                    <span>Send me E-mail</span>
                  </a>
                  <a href="https://github.com/KrishnaSharmaRS" target="_blank" className="art-link art-white-link art-w-chevron" rel="noreferrer">
                    Explore My GitHub
                  </a>
                </div>
              </div>
              <img src={ProfilePicturePNG} className="art-banner-photo" alt="Your Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
