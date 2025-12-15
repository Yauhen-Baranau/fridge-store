'use client';

import Image from 'next/image';
import Form, { FormFieldConfig } from '../form/form';
import styles from './dialog-form.module.scss';
import { Validators } from '../form/validators';
import { useContext } from 'react';
import { DialogContext } from '@src/contexts/dialog-context';
import WeWillCallYouBack from '@ui-kit/we-will-call-you-back/we-will-call-you-back';

export default function DialogForm({
  type = 'call-me-back'
}: {
  type?: 'call-me-back' | 'i-have-a-question'
}) {
  const { setDialogContent } = useContext(DialogContext);

  const getFieldConfigs = (type: string) => {
    const fieldConfigs: Array<FormFieldConfig> = [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Имя',
        validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[а-яА-Я]+$/)]
      },
    ];

    switch (type) {
      case 'call-me-back':
        fieldConfigs.push({
          type: 'tel',
          name: 'phone',
          placeholder: 'Телефон',
          validators: [Validators.required, Validators.pattern(/^\+375\s?\(?\d{2,4}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)],
        });
        break;
      case 'i-have-a-question':
        fieldConfigs.push(
          {
            type: 'email',
            name: 'email',
            placeholder: 'E-mail',
            validators: [Validators.required, Validators.pattern(/^\w+([\.\-]\w+)*@[a-zA-Z]+.[a-zA-Z]{2,3}$/)],
          },
          {
            type: 'textarea',
            name: 'question',
            placeholder: 'Ваш вопрос',
            validators: [Validators.maxLength(500)],
          },
        );
        break;
      default:
        break;
    }

    return fieldConfigs;
  }

  return <div className={styles.wrapper}>
    <h1 className={styles.title}>Закажите бесплатный звонок сейчас</h1>
    <Image className={styles.image} src='/dialog-form-photo.webp' width={470} height={454} alt='Специалист по ремонту холодильников' />
    <Form
      customClass={styles.form}
      preFieldsContent={<p className={styles['pre-field-text']}>Оставьте контактный телефон и в ближайшее время с вами свяжется наш специалист</p>}
      preSubmitButtonContent={<p className={styles['pre-submit-text']}>Нажимая на кнопку «Жду звонка» Вы даете согласие на <span className={styles.blue}>обработку данных</span></p>}
      submitButtonText='Жду звонка'
      submitCallback={formValue => {
        console.log(formValue);
        setDialogContent(<WeWillCallYouBack />);
      }}
      config={{ fieldConfigs: getFieldConfigs(type) }}
    />
  </div>
}