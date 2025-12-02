import styles from './page.module.scss';
import Header from "./components/header/header";
import Navigation from './components/navigation/navigation';

export default function Home() {
  return <div className={styles.home}>
    <Header />
    <Navigation />
  </div>;
}
