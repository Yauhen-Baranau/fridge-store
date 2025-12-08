import styles from './page.module.scss';
import HeroBlock from './components/hero-block/hero-block';
import MainAdvantages from './components/main-advantages/main-advantages';
import PopularServices from './components/popular-services/popular-services';
import DiscountBlock from '../ui-kit/discount-block/discount-block';
import FridgeManufacturers from '../ui-kit/fridge-manufacturers/fridge-manufacturers';
import AboutUs from './components/about-us/about-us';

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
