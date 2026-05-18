import { createFileRoute } from "@tanstack/react-router";
import { allDistricts } from "@/lib/locations";

const SITE = "https://www.pergoclean.com.tr";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const urls = [
          { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
          ...allDistricts.map((d) => ({
            loc: `${SITE}/bolge/${d.slug}`,
            priority: d.premium ? "0.9" : "0.7",
            changefreq: "monthly",
          })),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(body, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});