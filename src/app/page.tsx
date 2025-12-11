import styles from './page.module.scss';
import HeroBlock from '../ui-kit/hero-block/hero-block';
import MainAdvantages from '../ui-kit/main-advantages/main-advantages';
import PopularServices from '../ui-kit/popular-services/popular-services';
import DiscountBlock from '../ui-kit/discount-block/discount-block';
import FridgeManufacturers from '../ui-kit/fridge-manufacturers/fridge-manufacturers';
import AboutUs from '../ui-kit/about-us/about-us';

export default async function Home() {
  return <main className={styles.main}>
    <HeroBlock />
    <MainAdvantages />
    <PopularServices />
    <DiscountBlock />
    <FridgeManufacturers />
    <AboutUs />
  </main>
}
