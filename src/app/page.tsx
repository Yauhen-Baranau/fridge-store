import styles from './page.module.scss';
import Header from "./components/header/header";
import Navigation from './components/navigation/navigation';
import HeroBlock from './components/hero-block/hero-block';
import MainAdvantages from './components/main-advantages/main-advantages';

export default function Home() {
  return <>
    <Header customClass={styles.header} />
    <Navigation customClass={styles.nav} />
    <main className={styles.main}>
      <HeroBlock />
      <MainAdvantages />
    </main>
  </>;
}
