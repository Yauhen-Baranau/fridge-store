'use client';

import CallMeBackForm from '@src/ui-kit/call-me-back-form/call-me-back-form';
import styles from './page.module.scss';
import List from '@ui-kit/list/list';
import Image from 'next/image';
import composeClassName from '@src/helpers/compose-class-name';

export default function PaymentPage() {
  const listItemContentFactory = ({ title, text, index }: { title: string, text: string, index: number }) => {
    return <>
      <div className={styles['list-item-upper-row']}>
        <Image src={`/icons/number-${index + 1}.svg`} width={24} height={24} alt={`${index}`} />
        <h3 className={styles['list-item-title']}>{title}</h3>
      </div>
      <p className={styles.plaintext}>{text}</p>
    </>;
  }

  return <main className={styles.payment}>
    <div className={styles.text}>
      <h1 className={styles.title}>Оплата</h1>
      <h2 className={styles.subtitle}>Способы оплаты</h2>
      <p className={styles.plaintext}>Мы предлагаем несколько удобных способов оплаты за услуги по ремонту холодильников — выбирайте тот, который подходит именно вам.</p>
      <List customClass={styles.list} items={[
        { title: 'Оплата наличными', text: 'Вы можете произвести оплату прямо мастеру после выполнения работ. Это быстрый и привычный способ, не требующий дополнительных действий.' },
        { title: 'Банковские карты и мобильные сервисы', text: 'Мы принимаем к оплате карты Visa, Mastercard, Белкарт, а также Apple Pay и Samsung Pay. Расплатиться можно онлайн или при встрече — у мастера всегда с собой терминал.' },
        { title: 'Безналичная оплата для юрлиц', text: 'Для компаний мы предоставляем полный пакет документов и возможность оплаты по безналичному расчету. После подтверждения заказа вы получите счёт и все необходимые бумаги.' },
        { title: 'Платеж через ЕРИП', text: 'Оплата доступна через систему «Расчет» (ЕРИП) — вы можете оплатить услугу через интернет-банк, терминал или мобильное приложение. Подробная инструкция будет отправлена вам после оформления заявки.' },
      ].map((params, index) => ({ content: listItemContentFactory({ ...params, index }) }))} />
      <h2 className={styles.subtitle}>Гарантии и честная оплата</h2>
      <p className={styles.plaintext}>Мы оказываем услуги по ремонту холодильников официально и прозрачно. Стоимость работ фиксируется ещё на этапе оформления заявки, и после выполнения вы получаете кассовый чек или необходимые документы для бухгалтерии — если вы представляете организацию.</p>
      <br />
      <p className={styles.plaintext}>Никаких скрытых доплат — итоговая сумма всегда соответствует предварительно согласованной. Если у вас появятся замечания по качеству работ, мы оперативно разберёмся в ситуации и предложим удобное решение: повторный выезд мастера или частичный возврат средств, если это потребуется.</p>
      <h2 className={styles.subtitle}>Почему нам доверяют</h2>
      <p className={styles.plaintext}>Мы предлагаем несколько удобных способов оплаты за услуги по ремонту холодильников — выбирайте тот, который подходит именно вам.</p>
      <List customClass={styles.list} items={[
        { title: 'Честная оплата', text: 'Все цены озвучиваются заранее и не меняются в процессе. Никаких скрытых услуг или доплат — только прозрачные условия.' },
        { title: 'Удобная оплата на ваш выбор', text: 'Принимаем наличные, банковские карты, Apple Pay, Samsung Pay, ЕРИП и безналичный расчет — всё для вашего удобства.' },
        { title: 'Гарантия на услуги', text: 'Если вдруг возникнут вопросы к качеству работ — мы обязательно всё доработаем или вернём часть суммы. Мы не бросаем клиентов после визита.' },
        { title: 'Работаем с частными лицами и организациями', text: 'Предоставляем все необходимые документы: чеки, счета, акты и договоры — всё официально и по закону.' },
        { title: 'Оформление по правилам', text: 'Сумма ремонта фиксируется при оформлении заявки, а расчёт происходит только по факту выполненных работ.' },
      ].map((params, index) => ({ content: listItemContentFactory({ ...params, index }) }))} />
    </div>
    <CallMeBackForm customClass={styles['call-me-back-form']} />
    {/* didn't use background-image because these snowflakes are rotated */}
    <Image className={composeClassName(styles.snowflake, styles['snowflake-large'])} src='/snowflake.webp' width={613} height={595} alt='Снежинка' />
    <Image className={composeClassName(styles.snowflake, styles['snowflake-small'])} src='/snowflake.webp' width={341} height={331} alt='Снежинка' />
  </main>
}