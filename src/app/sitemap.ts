import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://abdinazarov-diyorbek.uz";
  return ["", "#about", "#work", "#stack", "#projects", "#contact"].map((path) => ({
    url: `${base}/${path}`.replace(/\/#/, "/"),
    lastModified: new Date(),
  }));
}


