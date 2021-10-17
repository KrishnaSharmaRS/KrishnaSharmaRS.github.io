export interface ICardProps {
  title: string;
  value: string;
  dateRange: string;
  description?: string;
}

export default function EduExpCard({ title, value, dateRange, description }: ICardProps) {
  return (
    <div className="art-timeline-item">
      <div className="art-timeline-mark-light" />
      <div className="art-timeline-mark" />
      <div className="art-a art-timeline-content">
        <div className="art-card-header">
          <div className="art-left-side">
            <h5>{title}</h5>
            <div className="art-el-suptitle mb-15">{value}</div>
          </div>
          <div className="art-right-side">
            <span className="art-date">{dateRange}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
