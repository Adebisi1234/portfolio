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
      <div className="my-10 w-10/12 h-[500px] flex justify-center items-center bg-darkBgL animate-pulse">
        <img src="" alt="my image" />
      </div>
      <div className="flex flex-col flex-wrap text-sm font-semibold sm:text-base xl:text-lg whitespace-break-spaces">
        <p className="flex-shrink mt-2">
          Hi, I'm a full stack developer from Nigeria.
        </p>
        <p className="mt-2">
          You'll learn more about me, in the <a href="#about">About section</a>{" "}
          below...
        </p>
        <p className="mt-2 mb-4 font-bold bg-gradient-to-r from-green-200 via-green-400 to-green-500 bg-clip-text">
          With the introductions out of the way, let me showcase my skills...
        </p>
      </div>
    </main>
  );
}
