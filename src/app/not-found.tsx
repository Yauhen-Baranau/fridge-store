import Link from "@ui-kit/static-link/static-link";
import styles from "./not-found.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.description}>
          Похоже, ссылка устарела или страница была перемещена. Вернитесь на главную
          и мы поможем найти нужную услугу.
        </p>
        <div className={styles.actions}>
          <Link href='/' className={styles.button}>
            На главную
          </Link>
          <Link href='/prices' className={styles.secondary}>
            Посмотреть цены
          </Link>
        </div>
      </div>
    </main>
  );
}
