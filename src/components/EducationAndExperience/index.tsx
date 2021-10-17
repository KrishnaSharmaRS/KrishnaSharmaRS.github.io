import EduExpCard, { ICardProps } from "./EduExpCard.component";

const data: { [key: string]: ICardProps[] } = {
  education: [
    {
      title: "Master of Computer Applications (M.C.A.)",
      value: "Indira Gandhi National Open University",
      dateRange: "July 2018 - Present",
    },
    {
      title: "Bachelor of Science (B. Sc.) - C. S.",
      value: "Dr. Bhimrao Ambedkar University",
      dateRange: "July 2015 - May 2018",
    },
    {
      title: "Intermediate (Class 12th) - P. C. M.",
      value: "Uttar Pradesh Board",
      dateRange: "July 2013 - May 2015",
    },
    {
      title: "High-School (Class 10th) - P. C. M.",
      value: "Uttar Pradesh Board",
      dateRange: "July 2011 - May 2013",
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      value: "CodeFire Technologies Pvt. Ltd.",
      dateRange: "March 2021 - Present",
      description: "To build front-end with React.js and back-end with Node.js for consuming APIs, using SQL & NoSQL databases like MySQL & MongoDB.",
    },
    {
      title: "Web Developer",
      value: "Eight Leaf Designs Pvt. Ltd.",
      dateRange: "July 2020 - February 2021",
      description:
        "Built two projects, first one's Back-end in Node.js using ExpressJS Framework with TypeScript, integrated AWS S3 bucket for uploading / storing images and Firebase for authenticating users with Google or Facebook. Second one's both, Front-end and Back-end on MERN stack, ie MongoDB, ExpressJS, ReactJS and NodeJS.",
    },
    {
      title: "Graphics Designer & Editor",
      value: "24 Hours Today News",
      dateRange: "January 2019 - August 2019",
      description:
        "Worked as a graphics designer with Adobe Photoshop for creating designs and logos for the channel social media pages like Facebook, YouTube etc. And as video editor with Adobe Premiere Pro for editing news videos.",
    },
  ],
};

export default function EducationAndExperience() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Education</h4>
            </div>
          </div>
          <div className="art-timeline art-gallery" id="history">
            {data.education.map((item, index) => (
              <EduExpCard key={index + 1} {...item} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Experience</h4>
            </div>
          </div>
          <div className="art-timeline">
            {data.experience.map((item, index) => (
              <EduExpCard key={index + 1} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
