export default function Header() {
  return (
    <nav className="sticky top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-20 lg:backdrop-blur-xl bg-darkBg lg:bg-darkBgXl">
      <div className="relative flex items-center justify-between w-11/12 h-full xl:w-10/12 2xl:w-max">
        <a href="#home" className="text-2xl font-bold text-center item-end">
          Tobiloba
        </a>

        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
          download={"Tobiloba Adebisi Cv"}
        >
          <button className="flex py-2 pl-6 pr-8 text-sm border bg-[#866504] border-gray-700 rounded-xl hover:bg-[#d3a92c]">
            Resume
          </button>
        </a>
      </div>
    </nav>
  );
}
