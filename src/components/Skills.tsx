export default function Skills() {
  return (
    <section className="bg-darkBg2">
      <h6 className="text-textGold text-2xl font-semibold mt-4 mb-10 leading-6">
        Skills & Technologies
      </h6>
      <div className="flex flex-col flex-wrap gap-2 gap-y-4 w-full">
        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide text-start">
            Frontend
          </h5>
          <ul className="*:list-none flex gap-1 items-start justify-start *:mt-1 text-center p-0 m-0 mt-4 mx-auto flex-wrap">
            <li>React,</li>
            <li>Typescript,</li>
            <li>Next.js,</li>
            <li>Javascript,</li>
            <li>Vite,</li>
            <li>TailwindCss,</li>
            <li>Styled-components,</li>
            <li>Shadcn/UI,</li>
          </ul>
        </div>
        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide text-start">
            Backend
          </h5>
          <ul className="*:list-none flex gap-1 items-start justify-start *:mt-1 text-center p-0 m-0 mt-4 mx-auto flex-wrap">
            <li>CronJob,</li>
            <li>Node.js,</li>
            <li>Express.js,</li>
            <li>Adonis.js,</li>
            <li>Python,</li>
            <li>Flask,</li>
          </ul>
        </div>
        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide text-start">
            Testing
          </h5>
          <ul className="*:list-none flex gap-1 items-start justify-start *:mt-1 text-center p-0 m-0 mt-4 mx-auto flex-wrap">
            <li>Vitest,</li>
            <li>Cypress,</li>
            <li>Jest,</li>
          </ul>
        </div>

        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide text-start">
            Database
          </h5>
          <ul className="*:list-none flex gap-1 items-start justify-start *:mt-1 text-center p-0 m-0 mt-4 mx-auto flex-wrap">
            <li>Prisma,</li>
            <li>Mongoose,</li>
            <li>Sql,</li>
            <li>MongoDB,</li>
            <li>MySql,</li>
            <li>PostgreSql,</li>
            <li>Supabase,</li>
            <li>Firebase,</li>
            <li>DynamoDB,</li>
            <li>Redis,</li>
          </ul>
        </div>

        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 flex gap-1 items-start justify-start text-start tracking-wide">
            Cloud Technologies
          </h5>
          <ul className="*:list-none *:mt-1 text-start p-0 m-0 mt-4 mx-auto flex gap-1 items-start justify-start">
            <li>AWS,</li>
            <li>Azure,</li>
            <li>Google Cloud Platform,</li>
          </ul>
        </div>
        <div className="w-full h-fit">
          <h5 className="font-bold text-2xl mt-2 tracking-wide text-start">
            Others
          </h5>
          <ul className="*:list-none flex gap-1 items-start justify-start *:mt-1 text-center p-0 m-0 mt-4 mx-auto flex-wrap">
            <li>Docker,</li>
            <li>C++,</li>
            <li>Temporal,</li>
            <li>Typesense | Algolia,</li>
            <li>Zod,</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
