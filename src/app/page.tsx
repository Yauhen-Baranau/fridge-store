import styles from './page.module.scss';
import Header from "./components/header/header";

export default function Home() {
  return <div className={styles.home}>
    <Header />
  </div>;
}
