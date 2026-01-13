import Image from "next/image";
import Link from "next/link";
import styles from './logo.module.scss';

export default function Logo() {
  return <Link className={styles["logo-wrapper"]} href="/">
    <Image className={styles.logo} src="/logo.webp" fill alt="Логотип" />
  </Link>
}