import EduExpCard from "./EduExpCard.component";
import data from "../../assets/database/db.json";

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
                        {data.education.map((item) => (
                            <EduExpCard key={item.title} {...item} />
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
                        {data.experience.map((item) => (
                            <EduExpCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
