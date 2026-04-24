import { Metadata } from "next";
import { About } from "@src/app/about-us/components";

export const metadata: Metadata = {
  title: 'О мастерской холодильников | holodcentr.by',
  description: 'О сервисной мастерской по ремонту холодильников: квалифицированные мастера, современное оборудование, ремонт холодильников любых брендов с гарантией. +375 (44) 5581940',
  alternates: {
    canonical: 'https://holodcentr.by/about-us',
  },
};

export default function AboutUsPage() {
  return (
  <About/>
  );
}
