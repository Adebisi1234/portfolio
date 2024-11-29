const fields = [
  {
    name: "Web Development",
    lists: [
      "Frontend Development",
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
      <h2 className="mt-4 mb-3 text-2xl font-semibold leading-6 text-textGold">
        Fields
      </h2>
      <div className="flex flex-col w-full gap-5 mb-5 lg:flex-row lg:gap-10">
        {fields.map((field, i) => (
          <div
            className={`w-full lg:w-1/${fields.length} flex flex-col items-center justify-start`}
            key={i}
          >
            <h5 className="mt-2 text-2xl font-bold tracking-wide">
              {field.name}
            </h5>
            <ul className="p-0 m-0 mt-4 *:list-none *:mt-1">
              {field.lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
