export default function Headline() {
  return (
    <main
      id="home"
      className="flex flex-col items-center justify-center w-full pt-[80px] lg:pt-40 text-center bg-darkBg"
    >
      <p className="text-base font-bold text-pretty ">Hello, I'm</p>
      <p className="text-lg font-bold text-pretty">Tobiloba Isaiah Adebisi</p>
      <h1 className="mt-2 text-4xl font-bold tracking-wide lg:text-7xl text-textGold">
        A Software Engineer (Data)
      </h1>
      <div className="flex items-center justify-center my-10 size-fit">
        <img
          src="me.jpg"
          alt="my image"
          className="rounded-full size-40 sm:size-52 lg:size-[200px]"
        />
      </div>
      <div className="flex flex-col flex-wrap text-sm font-semibold sm:text-base xl:text-lg">
        <p>
          An AWS Certified Data Engineer with a strong background in web
          development and product design. I specialize in building scalable,
          end-to-end data pipelines on the cloud, transforming raw data into
          actionable insights. My unique skill set allows me to not only
          architect robust data solutions but also to understand the end-user's
          needs for clear and effective data presentation.
        </p>
      </div>
    </main>
  );
}
