'use client';

import Button from '@src/ui-kit/button/button';
import styles from './call-me-back.module.scss';
import Form from '@src/ui-kit/form/form';
import composeClassName from '@src/helpers/compose-class-name';
import { contactInfo } from '@src/constants/contact-info';

export default function CallMeBack() {
  return <section className={styles['call-me-back']}>
    <div className={styles['call-me-back-left-block']}>
      <h1 className={styles['call-me-back-title']}>Остались вопросы?</h1>
      <p className={styles['call-me-back-text']}>Оставьте контактный телефон и в ближайшее время с вами свяжется наш специалист</p>
      <p className={styles['call-me-back-text']}>Или позвоните по этому номеру:</p>
      <p className={styles['call-me-back-phone']}>{contactInfo.phoneNumber}</p>
      <Button
        customClass={styles['call-me-back-button']}
        text='Позвонить'
        iconPath='icons/phone-2.webp'
        hoverIconPath='icons/phone-3.webp'
        style='text-only'
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
    {/* didn't use background-image because these snowflakes are rotated */}
    <img src='snowflake.webp' width={118} height={114} className={composeClassName(styles['snowflake'], styles['snowflake-upper-left'])} />
    <img src='snowflake.webp' width={118} height={114} className={composeClassName(styles['snowflake'], styles['snowflake-lower-left'])} />
  </section>
}