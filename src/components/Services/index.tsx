import ServiceCard, { IService } from "./ServiceCard.component";

const services: IService[] = [
  {
    title: "Web Development",
    description:
      "I can build website of any scale front-end to back-end with React.js + Node.js using TypeScript with integration of SQL or NoSQL database like MySQL, PostgreSQL, MongoDB etc.",
  },
  {
    title: "UI/UX Design",
    description: "I can design & developer web pages with Bootstrap, SCSS / SASS, Material Ui or using core CSS features like Flexbox & Grid System.",
  },
  {
    title: "App Development",
    description: "I can build cross-platform applications with React Native with latest features of React like hooks and context API using TypeScript.",
  },
];

export default function Services() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>My Services</h4>
            </div>
          </div>
        </div>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
