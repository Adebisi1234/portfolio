export default function Skills() {
  return (
    <section className="bg-darkBg2">
      <h6 className="text-textGold text-2xl font-semibold mt-4 mb-10 leading-6">
        Skills & Technologies
      </h6>
      <div className="flex flex-wrap gap-2 gap-y-4 w-full">
        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">Frontend</h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>React</li>
            <li>Typescript</li>
            <li>Next.js</li>
            <li>Javascript</li>
            <li>Vite</li>
            <li>TailwindCss</li>
            <li>Styled-components</li>
            <li>Shadcn/UI</li>
          </ul>
        </div>
        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">Backend</h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>CronJob</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Adonis.js</li>
            <li>Python</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">Testing</h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>Vitest</li>
            <li>Cypress</li>
            <li>Jest</li>
          </ul>
        </div>

        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">Database</h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>Prisma</li>
            <li>Mongoose</li>
            <li>Sql</li>
            <li>MongoDB</li>
            <li>MySql</li>
            <li>PostgreSql</li>
            <li>Supabase</li>
            <li>Firebase</li>
            <li>DynamoDB</li>
            <li>Redis</li>
          </ul>
        </div>

        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">
            Cloud Provider
          </h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>AWS</li>
            <li>Azure</li>
            <li>Google Cloud Platform</li>
          </ul>
        </div>
        <div className="min-w-[calc(50%_-_8px)] sm:min-w-[calc(33%_-_8px)] h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide">Others</h5>
          <ul className="*:list-none text-center p-0 m-0 mt-4 mx-auto">
            <li>Docker</li>
            <li>C++</li>
            <li>Python</li>
            <li>Temporal</li>
            <li>Git</li>
            <li>Typesense | Algolia</li>
            <li>Zod</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
