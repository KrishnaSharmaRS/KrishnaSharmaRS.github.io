export default function Header() {
  return (
    <div className="art-header">
      <div className="art-avatar">
        <a
          data-fancybox="avatar"
          href={"/assets/img/profile-picture.jpg"}
          className="art-avatar-curtain"
        >
          <img src={"/assets/img/profile-picture.jpg"} alt="avatar" />
          <i className="fas fa-expand" />
        </a>
        <div className="art-lamp-light">
          <div className="art-available-lamp" />
        </div>
      </div>
      <h5 className="art-name mb-10">Krishna Sharma</h5>
      <div className="art-sm-text">Full Stack Developer</div>
    </div>
  );
}
