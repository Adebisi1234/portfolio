import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

const routes = {
  software: {
    title: "Tobiloba Adebisi — Software Engineer",
    description:
      "Software engineer building reliable web applications and digital experiences.",
    image:
      "https://res.cloudinary.com/dnkfg07ov/image/upload/v1787262950/Screenshot_2026-08-20_225538_gerf3e.png",
  },

  data: {
    title: "Tobiloba Adebisi — Data Engineer",
    description:
      "Data engineer building reliable data systems, pipelines, and analytics solutions.",
    image:
      "https://res.cloudinary.com/dnkfg07ov/image/upload/v1787262930/Screenshot_2026-08-20_225433_dmonuw.png",
  },
};

const baseHtml = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const [route, meta] of Object.entries(routes)) {
  const routeHtml = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:url" content="https://tobiloba.me/portfolio/${route}/" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/>/,
      `<meta property="og:image" content="${meta.image}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:title" content="${meta.title}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:description" content="${meta.description}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/>/,
      `<meta name="twitter:image" content="${meta.image}" />`,
    );

  const routeDir = path.join(dist, route);

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);

  console.log(`Generated /portfolio/${route}/index.html`);
}
