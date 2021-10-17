export default function DownloadResume() {
  return (
    <span
      onClick={() => {
        window.open("/assets/files/Krishna's Resume.pdf", "_blank")?.focus();
      }}
      className="art-link"
      style={{ cursor: "pointer" }}
    >
      Download RESUME
      <i className="fas fa-download" />
    </span>
  );
}
