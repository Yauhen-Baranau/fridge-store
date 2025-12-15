'use client';

import composeClassName from '@src/helpers/compose-class-name';
import Form from '../form/form';
import styles from './call-me-back-form.module.scss';
import { Validators } from '../form/validators';
import { useContext } from 'react';
import { DialogContext } from '@contexts/dialog-context';
import WeWillCallYouBack from '@ui-kit/we-will-call-you-back/we-will-call-you-back';

export default function CallMeBackForm({ customClass }: { customClass?: string }) {
  const { showDialog } = useContext(DialogContext);

  return <Form
    customClass={composeClassName(styles.form, customClass)}
    preFieldsContent={<>
      <h3 className={styles['form-title']}>Оформить заказ</h3>
      <p className={styles['form-subtitle']}>Оставьте заявку на оформление заказа и&nbsp;мы Вам перезвоним в ближайшее время</p>
    </>}
    preSubmitButtonContent={
      <p className={styles['privacy-policy-notice']}>
        Нажимая на кнопку &quot;Отправить&quot; Вы даете согласие на <span className={styles.blue}>обработку данных</span>
      </p>
    }
    config={{
        fieldConfigs: [
          {
            type: 'text',
            name: 'name',
            placeholder: 'Имя',
            validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[а-яА-Я]+$/)],
          },
          {
            type: 'tel',
            name: 'phone',
            placeholder: 'Телефон',
            validators: [Validators.required, Validators.pattern(/^\+375\s?\(?\d{2,4}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)],
          },
        ],
    }}
    submitButtonText='Получить консультацию'
    submitCallback={formValue => {
      console.log(formValue);
      showDialog(<WeWillCallYouBack />)
    }}
  />
}