import DownloadResume from "../../DownloadResume";

export default function Footer() {
  return (
    <div className="container-fluid">
      <footer>
        <div>{`Krishna Sharma | Full Stack Developer | ${new Date().getFullYear()}`}</div>
        <div className="art-links-frame p-15-15">
          <DownloadResume />
        </div>
      </footer>
    </div>
  );
}
