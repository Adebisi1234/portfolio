export default function Certifications() {
  const certifications = [
    {
      src: "aws-certified-data-engineer-associate.png",
      alt: "AWS Certified Data Engineer - Associate",
      href: "https://www.credly.com/badges/1c935afc-2249-4f46-a2ba-3d237b5fba18/public_url",
      description:
        "Earners of this certification have an in-depth understanding of how to use AWS services to implement data pipelines and to monitor, troubleshoot, and optimize cost and performance issues in accordance with best practices. Badge owners have technical expertise to understand the effects of volume, variety, and velocity on data ingestion. They are familiar with transformation, modeling, security, governance, privacy, schema design, and optimal data store design.",
      title: "AWS Certified Data Engineer - Associate",
    },
    {
      src: "DE Associate - badge with outline.jpg",
      alt: "Datacamp Data Engineer - Associate",
      href: "https://www.datacamp.com/certificate/DEA0018938031747",
      description:
        "This certification demonstrates your understanding of the key concepts and skills required to be a successful data engineer, including data modeling, ETL processes, and data warehousing.",
      title: "Datacamp Data Engineer - Associate",
    },
    {
      src: "aws-certified-cloud-practitioner.png",
      alt: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/499be978-36df-4d54-9909-d71240621b10/public_url",
      description:
        "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
      title: "AWS Certified Cloud Practitioner",
    },
  ];
  return (
    <section className="bg-darkBg">
      <h2 className="mt-4 mb-10 text-2xl font-semibold leading-6 text-textGoldLight">
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <a href={cert.href} className="rounded-lg p-4 shadow">
            <img
              src={cert.src}
              className="w-full h-auto aspect-square"
              alt={cert.alt}
            />
            <h3 className="text-lg font-semibold text-textGoldLight my-2">
              {cert.title}
            </h3>
            <p className="font-light text-md">{cert.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
