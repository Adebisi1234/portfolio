export default function Header() {
  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center sticky lg:backdrop-blur-xl z-40 bg-darkBg lg:bg-darkBgXl left-0 top-0">
      <div className="w-11/12 h-full flex justify-between items-center relative xl:w-10/12 2xl:w-max">
        <a href="#home" className="item-end text-center text-2xl font-bold">
          Tobiloba
        </a>

        <button className="pl-6 pr-8 py-2 text-sm flex rounded-xl hover:bg-darkBgL bg-darkBgXl border border-gray-700">
          <a
            href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
            download={true}
          >
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
}
