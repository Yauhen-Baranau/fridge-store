import styles from './we-will-call-you-back.module.scss';

export default function WeWillCallYouBack() {
  return <div className={styles.wrapper}>
    <h1 className={styles.title}>Ваша заявка оформлена</h1>
    <p className={styles.text}>В ближайшее время с вами свяжется наш специалист</p>
  </div>
}