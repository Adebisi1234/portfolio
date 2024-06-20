export default function Main() {
  return (
    <main
      id="home"
      className="flex flex-col items-center justify-center w-full pt-40 text-center bg-darkBg"
    >
      <p className="text-base font-bold text-pretty ">Hello, I'm</p>
      <p className="text-lg font-bold text-pretty">Tobiloba Isaiah Adebisi</p>
      <h1 className="mt-2 text-4xl font-bold tracking-wide lg:text-7xl text-textGold">
        A Software Developer
      </h1>
      <div className="my-10 size-fit flex justify-center items-center">
        <img
          src="/me.jpg"
          alt="my image"
          className="size-40 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-wrap text-sm font-semibold sm:text-base xl:text-lg">
        <p className="py-2">
          There isn't much to say, I'm a computer geek
        </p>
        <p>and I'm glad I can make a career out of doing what I love</p>
        <p className="py-2">
          I'm willing to try my hand at anything tech, except for design{" "}
          <i>blehh...</i>
        </p>
        <p>Respect to all designers out there tho...</p>
        <p className="pt-2 mb-4 font-bold bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text">
          With the introductions out of the way, let me showcase my skills...
        </p>
      </div>
    </main>
  );
}
