export interface IWork {
  imageSrc: string;
  title: string;
  description: string;
  liveUrl: string;
  className: string;
}

export default function WorkCard({ imageSrc, title, description, liveUrl, className }: IWork) {
  return (
    <div className={`art-grid-item ${className}`} style={{ position: "absolute", left: 0, top: 0 }}>
      <a href={liveUrl} target="_blank" className="art-a art-portfolio-item-frame art-vertical" rel="noreferrer">
        <img src={imageSrc} alt="item" />
      </a>
      <div className="art-item-description">
        <h5 className="mb-15">{title}</h5>
        <div className="mb-15">{description}</div>
        <a href={liveUrl} target="_blank" className="art-link art-color-link art-w-chevron" rel="noreferrer">
          View Live
        </a>
      </div>
    </div>
  );
}
