export interface IService {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: IService) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="art-a art-service-icon-box">
        <div className="art-service-ib-content">
          <h5 className="mb-15">{title}</h5>
          <div className="mb-15">{description}</div>
        </div>
      </div>
    </div>
  );
}
