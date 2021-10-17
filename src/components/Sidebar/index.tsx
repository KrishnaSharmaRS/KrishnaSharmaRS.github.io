import Header from "./Header.component";
import Info from "./Info.component";
import Footer from "./Footer.component";

export default function Sidebar() {
  return (
    <div className="art-info-bar">
      <div className="art-info-bar-frame">
        <div className="art-info-bar-header">
          <a className="art-info-bar-btn" href="#.">
            <i className="fas fa-ellipsis-v" />
          </a>
        </div>
        <Header />
        <Info />
        <Footer />
      </div>
    </div>
  );
}
