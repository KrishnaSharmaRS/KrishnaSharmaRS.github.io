export interface IContactInfo {
  title: string;
  value: string;
  url?: string;
}

export default function InfoCard({ items }: { items: IContactInfo[] }) {
  return (
    <div className="col-lg-4">
      <div className="art-a art-card">
        <div className="art-table p-15-15">
          <ul>
            {items.map(({ title, value, url }) => (
              <li key={title}>
                <h6 title={title}>{title}:</h6>
                {url ? (
                  <a href={url} target="_blank" rel="noreferrer" title={value}>
                    {value}
                  </a>
                ) : (
                  <span title={value}>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
