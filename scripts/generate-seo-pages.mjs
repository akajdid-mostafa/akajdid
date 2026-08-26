import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const SITE_URL = "https://akajdidm.vercel.app";
const OG_IMAGE = `${SITE_URL}/mostafaakajdid-og.png`;
const DIST_DIR = resolve("dist");

const routes = [
  {
    path: "/projects",
    title: "Projects — Mostafa Akajdid",
    description:
      "Case studies by Mostafa Akajdid covering full-stack products, client websites, dashboards, APIs, authentication, and data.",
    type: "website",
  },
  {
    path: "/projects/realstate",
    title: "Real Estate Platform — Mostafa Akajdid",
    description:
      "I rebuilt this real estate project as two connected apps: a public property website and a dashboard that manages the data behind it.",
  },
  {
    path: "/projects/ocean-glass",
    title: "Ocean Glass — Mostafa Akajdid",
    description:
      "A client website in English, French, and Arabic, with service pages, project galleries, and a quotation flow built around how the business works.",
  },
  {
    path: "/projects/piolec",
    title: "Piolec — Mostafa Akajdid",
    description:
      "A public website and custom dashboard that let an electrical engineering company publish its own projects, articles, and field photography.",
  },
  {
    path: "/projects/monpatient",
    title: "MonPatient — Mostafa Akajdid",
    description:
      "A healthcare project where patients, doctors, nurses, pharmacies, and administrators each get the workflows and information meant for their role.",
  },
  {
    path: "/projects/storycareer",
    title: "StoryCareer — Mostafa Akajdid",
    description:
      "A place to read career stories from people, not another collection of generic advice about how a career should look.",
  },
  {
    path: "/projects/halatranslat",
    title: "Hala Translat — Mostafa Akajdid",
    description:
      "A translation workflow that starts with a document upload and continues through pricing, tracking, administration, and final file delivery.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy — Mostafa Akajdid",
    description:
      "How Mostafa Akajdid's portfolio handles contact form submissions, analytics, hosting, and personal information.",
    type: "website",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta(?=[^>]*\\b${attribute}="${key}")[^>]*>`,
    "i"
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" data-rh="true" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function createShell(template, route) {
  const url = `${SITE_URL}${route.path}`;
  let html = template.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${escapeHtml(route.title)}</title>`
  );

  html = replaceMeta(html, "name", "description", route.description);
  html = replaceMeta(html, "name", "robots", "index, follow");
  html = replaceMeta(html, "property", "og:title", route.title);
  html = replaceMeta(html, "property", "og:description", route.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:type", route.type || "article");
  html = replaceMeta(html, "property", "og:image", OG_IMAGE);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = replaceMeta(html, "name", "twitter:image", OG_IMAGE);

  html = html.replace(
    /<link(?=[^>]*\brel="canonical")[^>]*>/i,
    `<link rel="canonical" href="${url}" data-rh="true" />`
  );

  if (route.path.startsWith("/projects/")) {
    const structuredData = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: route.title.replace(" — Mostafa Akajdid", ""),
      description: route.description,
      url,
      image: OG_IMAGE,
      creator: {
        "@type": "Person",
        name: "Mostafa Akajdid",
        url: SITE_URL,
      },
      inLanguage: "en",
    });
    html = html.replace(
      "</head>",
      `    <script type="application/ld+json">${structuredData}</script>\n  </head>`
    );
  }

  return html;
}

async function writeRoute(path, html) {
  const outputPath = resolve(DIST_DIR, path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

const template = await readFile(resolve(DIST_DIR, "index.html"), "utf8");

for (const route of routes) {
  await writeRoute(route.path, createShell(template, route));
}

let notFound = template.replace(
  /<title[^>]*>[\s\S]*?<\/title>/i,
  '<title data-rh="true">404 — Page Not Found | Mostafa Akajdid</title>'
);
notFound = replaceMeta(
  notFound,
  "name",
  "description",
  "The requested page could not be found."
);
notFound = replaceMeta(notFound, "name", "robots", "noindex, follow");
await writeFile(resolve(DIST_DIR, "404.html"), notFound);

console.log(`Generated SEO HTML for ${routes.length} routes and 404.html.`);
