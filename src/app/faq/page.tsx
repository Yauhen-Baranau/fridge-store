'use client';

import List from '@ui-kit/list/list';
import styles from './page.module.scss';
import Image from 'next/image';
import BackgroundSnowflake from '@src/ui-kit/background-snowflake/background-snowflake';
import useResponsive from '@hooks/use-responsive';

export default function FaqPage() {
  const { isMobile } = useResponsive();

  const faqListItemFactory = ({ question, answer }: { question: string, answer: string }) => {
    return {
      content: <details className={styles['faq-list-item']}>
        <summary className={styles['faq-list-item-question']}>
          {question}
          <Image className={styles['plus-icon']} src='/icons/plus.svg' width={24} height={24} alt='Плюс' />
        </summary>
        <p className={styles['faq-list-item-answer']}>{answer}</p>
      </details>
    }
  };

  return <main className={styles.faq}>
    <h1 className={styles.title}>Популярные вопросы</h1>
    <List customClass={styles['faq-list']} items={[
      { question: 'Можно ли заменить верхнюю камеру в холодильнике Электролюкс?', answer: 'text' },
      { question: 'Может ли не включаться холодильник в холодном помещении?', answer: 'text' },
      { question: 'Подскажите марки фреона для заправки холодильников?', answer: 'text' },
      { question: 'Как узнать, сломался ли компрессор в холодильнике Атлант? ', answer: 'text' },
      { question: 'Как долго занимает ремонт холодильника?', answer: 'Для замены термостата необходимо приобрести термостат, который подходит к модели данного холодильника, при демонтаже неисправного термостата необходимо запомнит, как он был установлен и таким же образом установить новый термостат. Но этот вид работы лучше предоставить специалисту. При неправильном подключении холодильник может работать не корректно.' },
      { question: 'Как заменить вилку сети холодильника?', answer: 'text' },
      { question: 'Что делать, если после ремонта проблема повторилась?', answer: 'text' },
      { question: 'Вы принимаете оплату картой?', answer: 'text' },
      { question: 'Могу ли я заказать экстренный ремонт?', answer: 'text' },
      { question: 'Как быстро можно записаться на ремонт?', answer: 'text' },
      { question: 'Есть ли у вас скидки на услуги?', answer: 'text' },
    ].map(faqListItemFactory)} />
    {!isMobile
      ? <>
        <BackgroundSnowflake width={173} height={168} left={41} top={57} rotation={-30} />
        <BackgroundSnowflake width={173} height={168} right={41} top={57} rotation={-30} />
      </>
      : <>
        <BackgroundSnowflake width={69} height={64} left={20} bottom={20} rotation={-30} />
        <BackgroundSnowflake width={69} height={64} right={20} bottom={20} rotation={-30} />
      </>}
  </main>
}