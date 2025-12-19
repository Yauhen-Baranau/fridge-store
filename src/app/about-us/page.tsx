import Image from 'next/image';
import styles from './page.module.scss';
import MainAdvantages from '@src/ui-kit/main-advantages/main-advantages';
import DiscountBlock from '@src/ui-kit/discount-block/discount-block';
import FridgeManufacturers from '@src/ui-kit/fridge-manufacturers/fridge-manufacturers';
import HowToOrderRepairs from '@src/ui-kit/how-to-order-repairs/how-to-order-repairs';
import HowWeDiffer from '@src/ui-kit/how-we-differ/how-we-differ';

export default async function AboutUsPage() {
  return <main className={styles['about-us']}>
    <section className={styles['description-block']}>
      <h1 className={styles.title}>О компании</h1>
      <div className={styles.description}>
        <p className={styles['description-paragraph']}>Наша компания специализируется на профессиональном ремонте холодильников любых брендов и моделей, от бытовых до промышленных. Мы работаем на рынке <b className={styles.bold}>более 10 лет</b> и за это время заслужили репутацию надежных и ответственных специалистов. Наша команда состоит из опытных мастеров с техническим образованием, которые постоянно проходят обучение и знают всё о современных холодильных системах.</p>
        <p className={styles['description-paragraph']}>Мы ценим ваше время, поэтому выезжаем точно по договоренности, <b className={styles.bold}>диагностируем быстро</b> и устраняем неполадки уже <b className={styles.bold}>в день обращения</b>. Мы используем <b className={styles.bold}>только оригинальные запчасти</b>, предоставляем гарантию на все виды работ и всегда объясняем клиенту суть проблемы простыми словами. </p>
        <p className={styles['description-paragraph']}><b className={styles.bold}>Наша цель</b> — не просто отремонтировать технику, а сделать так, чтобы вы больше не волновались о её работе.</p>
      </div>
      <div className={styles['image-wrapper']}>
        <Image className={styles.image} src={'/about-us-photo.webp'} fill alt='Специалист по ремонту холодильников' />
      </div>
    </section>
    <MainAdvantages />
    <HowWeDiffer />
    <DiscountBlock />
    <FridgeManufacturers />
    <HowToOrderRepairs />
  </main>
}