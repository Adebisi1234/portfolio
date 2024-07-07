export default function Main() {
  return (
    <main
      id="home"
      className="flex flex-col items-center justify-center w-full pt-[80px] lg:pt-40 text-center bg-darkBg"
    >
      <p className="text-base font-bold text-pretty ">Hello, I'm</p>
      <p className="text-lg font-bold text-pretty">Tobiloba Isaiah Adebisi</p>
      <h1 className="mt-2 text-4xl font-bold tracking-wide lg:text-7xl text-textGold">
        A Software Developer
      </h1>
      <div className="flex items-center justify-center my-10 size-fit">
        <img
          src="me.jpg"
          alt="my image"
          className="object-cover rounded-full size-40"
        />
      </div>
      <div className="flex flex-col flex-wrap text-sm font-semibold sm:text-base xl:text-lg">
        <p>
          I'm proficient in building, testing and maintaining user-facing
          features,
        </p>
        <p>
          having worked within the small business E-commerce space averaging
          100+ users a month
        </p>
        <p className="pt-2 mb-4 font-bold bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text">
          With the introductions out of the way, let me showcase my skills...
        </p>
      </div>
    </main>
  );
}
