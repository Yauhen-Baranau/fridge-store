'use client';

import Button from '@ui-kit/button/button';
import styles from './call-me-back.module.scss';
import Form from '@ui-kit/form/form';
import composeClassName from '@src/helpers/compose-class-name';
import { contactInfo } from '@constants/contact-info';
import Image from 'next/image';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';

export default function CallMeBack({ customClass }: { customClass?: string }) {
  return <section className={composeClassName(styles['call-me-back'], customClass)}>
    <div className={styles['call-me-back-left-block']}>
      <h1 className={styles['call-me-back-title']}>Остались вопросы?</h1>
      <p className={styles['call-me-back-text']}>Оставьте контактный телефон и в ближайшее время с вами свяжется наш специалист</p>
      <p className={styles['call-me-back-text']}>Или позвоните по этому номеру:</p>
      <p className={styles['call-me-back-phone']}>{contactInfo.phoneNumber}</p>
      <Button
        customClass={styles['call-me-back-button']}
        text='Позвонить'
        icon={{
          path: '/icons/phone-2.svg',
          width: 24,
          height: 24,
        }}
        hoverIcon={{
          path: '/icons/phone-3.svg',
          width: 24,
          height: 24,
        }}
        style='text-only'
        onClick={() => window.open(`tel:${contactInfo.phoneNumber
          .split(' ').join('')
          .split('-').join('')
          .split('(').join('')
          .split(')').join('')
        }`)}
      />
    </div>
    <Form
      customClass={styles['call-me-back-form']}
      submitButtonText='Получить консультацию'
      submitCallback={console.log}
      preSubmitButtonContent={
        <p className={styles['privacy-policy-notice']}>
          Оставляя заявку Вы соглашаетесь на обработку <span className={styles.blue}>персональных данных</span>
        </p>
      }
      config={{
        fieldConfigs: [
          { type: 'text', name: 'name', placeholder: 'Имя' },
          { type: 'text', name: 'phone', placeholder: 'Телефон' },
        ],
      }}
    />
    <BackgroundSnowflake width={118} height={114} left={22} top={20} rotation={-30} opacity={0.15} />
    <BackgroundSnowflake width={118} height={114} left={22} bottom={23} rotation={-30} opacity={0.15} />
  </section>
}