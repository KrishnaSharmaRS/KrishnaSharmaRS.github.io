import InfoCard, { IContactInfo } from "./InfoCard.component";

export const contactInfos: { [key: string]: IContactInfo[] } = {
  address: [
    {
      title: "Country",
      value: "INDIA",
    },
    {
      title: "State",
      value: "Uttar Pradesh",
    },
    {
      title: "City",
      value: "Ghaziabad, U. P.",
    },
    {
      title: "Address",
      value: "Sector 62",
    },
  ],
  socialMedia: [
    {
      title: "LinkedIn",
      value: "@KrishnaSharmaRS",
      url: "https://www.linkedin.com/in/KrishnaSharmaRS/",
    },
    {
      title: "Twitter",
      value: "@KrishnaSharmaRS",
      url: "https://www.twitter.com/KrishnaSharmaRS/",
    },
    {
      title: "GitHub",
      value: "@KrishnaSharmaRS",
      url: "https://www.github.com/KrishnaSharmaRS/",
    },
    {
      title: "Email",
      value: "KrishnaSharmaRS@Hotmail.com",
      url: "mailto:KrishnaSharmaRS@hotmail.com",
    },
  ],
  phoneNumbers: [
    {
      title: "Phone",
      value: "+91 94588 55445",
      url: "tel:+919458855445",
    },
    {
      title: "Alternative Phone",
      value: "+91 94 12345 783",
      url: "tel:+919412345783",
    },
    {
      title: "WhatsApp",
      value: "+91 94588 55445",
      url: "https://wa.me/919458855445",
    },
    {
      title: "Telegram",
      value: "+91 94588 55445",
      url: "https://t.me/+919412345783",
    },
  ],
};

export default function ContactInfo() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Contact information</h4>
            </div>
          </div>
        </div>
        {Object.values(contactInfos).map((items, index) => (
          <InfoCard key={index + 1} items={items} />
        ))}
      </div>
    </div>
  );
}
