import Hr from "./Hr";

export default function Footer() {
  return (
    <section className="bg-darkBg">
      <div className="my-10 flex flex-col gap-5 items-start ml-10 mr-auto">
        <h3 className="font-bold text-lg">Tobiloba Isaiah Adebisi</h3>
        <p>Reach me using the below links</p>
        <div className="links flex gap-1">
          <div className="size-10 bg-darkBg border-gray-500 rounded-sm"></div>
          <div className="size-10 bg-darkBg border-gray-500 rounded-sm"></div>
          <div className="size-10 bg-darkBg border-gray-500 rounded-sm"></div>
          <div className="size-10 bg-darkBg border-gray-500 rounded-sm"></div>
        </div>
      </div>
      <Hr />
      <p className="mt-10 mb-2">
        Design greatly inspired by{" "}
        <a href="https://road-to-next.com">road to next</a> by Robin Wieruch.
      </p>
      <p>Copyright © 2024 Tobiloba Adebisi. All rights reserved.</p>
    </section>
  );
}
