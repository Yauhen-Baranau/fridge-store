import styles from './page.module.scss';
import HeroBlock from './components/hero-block/hero-block';
import MainAdvantages from './components/main-advantages/main-advantages';
import PopularServices from './components/popular-services/popular-services';
import DiscountBlock from './components/discount-block/discount-block';
import FridgeManufacturers from './components/fridge-manufacturers/fridge-manufacturers';
import AboutUs from './components/about-us/about-us';
import CallMeBack from './components/call-me-back/call-me-back';

export default async function Home() {
  return <main className={styles.main}>
    <HeroBlock />
    <MainAdvantages />
    <PopularServices />
    <DiscountBlock />
    <FridgeManufacturers />
    <AboutUs />
    <CallMeBack />
  </main>
}
