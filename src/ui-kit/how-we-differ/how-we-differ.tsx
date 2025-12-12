import Image from 'next/image';
import styles from './how-we-differ.module.scss';

export default function HowWeDiffer() {
  return <section className={styles['how-we-differ']}>
    <h1 className={styles.title}>Чем мы отличаемся от конкурентов?</h1>
    <Image className={styles.image} src='/how-we-differ-photo.webp' width={278} height={434} alt='Специалист по ремонту холодильников' />
    <div className={styles.difference}>
      <Image src='/icons/calendar-bg.svg' width={46} height={46} alt='Календарь' />
      <p className={styles['difference-text']}>Работаем без&nbsp;выходных и&nbsp;праздников</p>
    </div>
    <div className={styles.difference}>
      <Image src='/icons/suitcase.svg' width={46} height={46} alt='Чемодан' />
      <p className={styles['difference-text']}>Полный комплект запчастей у&nbsp;мастера</p>
    </div>
    <div className={styles.difference}>
      <Image src='/icons/people.svg' width={46} height={46} alt='Люди' />
      <p className={styles['difference-text']}>Официально трудоустроенные мастера</p>
    </div>
    <div className={styles.difference}>
      <Image src='/icons/star.svg' width={46} height={46} alt='Звёздочка' />
      <p className={styles['difference-text']}>Реальные и&nbsp;проверенные отзывы</p>
    </div>
  </section>
}