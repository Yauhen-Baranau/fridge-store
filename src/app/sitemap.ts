export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { serviceRouteStructure } from "@constants/service-route-structure";

const siteUrl = "https://holodcentr.by";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "about-us",
    "contacts",
    "faq",
    "payment",
    "prices",
    "reviews",
    "common-fridge-problems",
  ].map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = [];

  for (const categoryRoute in serviceRouteStructure) {
    servicePages.push({
      url: `${siteUrl}/${categoryRoute}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const subcategoryRoute in serviceRouteStructure[categoryRoute]) {
      servicePages.push({
        url: `${siteUrl}/${categoryRoute}/${subcategoryRoute}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });

      for (const serviceRoute of serviceRouteStructure[categoryRoute][subcategoryRoute]) {
        servicePages.push({
          url: `${siteUrl}/${categoryRoute}/${subcategoryRoute}/${serviceRoute}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return [...staticPages, ...servicePages];
}
