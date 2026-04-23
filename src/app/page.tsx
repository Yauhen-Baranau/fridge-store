import styles from "./page.module.scss";
import HeroBlock from "../ui-kit/hero-block/hero-block";
import MainAdvantages from "../ui-kit/main-advantages/main-advantages";
import PopularServices from "../ui-kit/popular-services/popular-services";
import DiscountBlock from "../ui-kit/discount-block/discount-block";
import FridgeManufacturers from "../ui-kit/fridge-manufacturers/fridge-manufacturers";
import AboutUs from "../ui-kit/about-us/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ремонт холодильников в Минске',
  description: 'Ремонт холодильников в Минске на дому любой сложности: замена деталей, заправка фреона, устранение неисправностей. Быстрый выезд мастера и гарантия на все виды работ. +375 (44) 5581940',
  alternates: {
    canonical: 'https://icefix.by',
  },
};

export default async function Home() {
  return (
    <main className={styles.main}>
      <HeroBlock />
      <MainAdvantages />
      <PopularServices />
      <DiscountBlock />
      <FridgeManufacturers />
      <AboutUs />
    </main>
  );
}
