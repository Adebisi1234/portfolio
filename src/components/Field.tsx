export default function Field() {
  return (
    <section>
      <p className="font-bold text-lg text-pretty">Fields</p>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 ">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start ">
          <h2 className="font-bold text-3xl mt-2 tracking-wide">
            Web Development
          </h2>
          <ul className="text-start p-0 m-0 font-bold mt-4">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Testing</li>
            <li>CI/CD</li>
            <li>UI Development</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start text-end">
          <h2 className="font-bold text-3xl mt-2 tracking-wide">
            ML/AI Engineering
          </h2>
          <ul className="text-start p-0 m-0 font-bold mt-4">
            <li>Data Collection</li>
            <li>Data Sanitization</li>
            <li>Model training</li>
            <li>Model Deployment</li>
            <li>Model Integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
