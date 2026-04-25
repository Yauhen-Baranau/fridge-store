import styles from "../we-will-call-you-back/we-will-call-you-back.module.scss";
import { contactInfo } from "@constants/contact-info";

export default function Sorry() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Что-то пошло не так...</h1>
      <p className={styles.text}>
        Свяжитесь с мастером по номеру {contactInfo.phoneNumber}
      </p>
    </div>
  );
}

