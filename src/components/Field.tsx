const fields = [
  {
    name: "Web Development",
    lists: [
      "Fronted Development",
      "Backend Development",
      "Testing",
      "CI/CD",
      "UI Development",
    ],
  },
  {
    name: "Network Programming",
    lists: [
      "Socket Programming",
      "Reading and Writing to Networks",
      "Stream Sockets",
      "Datagram Sockets",
      "Polling",
    ],
  },
  {
    name: "ML/AI Engineering",
    lists: [
      "Data Collection",
      "Data Sanitization",
      "Model Training",
      "Model Deployment",
      "Model Integration",
    ],
  },
];
export default function Field() {
  return (
    <section className="bg-darkBg2">
      <p className="font-bold leading-loose my-4 text-lg text-pretty">Fields</p>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        {fields.map((field) => (
          <div
            className={`w-full lg:w-1/${fields.length} flex flex-col items-center justify-start`}
          >
            <h2 className="font-bold text-3xl mt-2 tracking-wide">
              {field.name}
            </h2>
            <ul className="text-start p-0 m-0 font-bold mt-4">
              {field.lists.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
