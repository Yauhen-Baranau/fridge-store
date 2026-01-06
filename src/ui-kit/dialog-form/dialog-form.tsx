'use client';

import Image from 'next/image';
import Form from '../form/form';
import styles from './dialog-form.module.scss';
import { useDialog } from '@contexts/dialog/dialog-context';
import WeWillCallYouBack from '@ui-kit/we-will-call-you-back/we-will-call-you-back';
import useResponsive from '@hooks/use-responsive';
import { getFieldConfigs } from './helpers/get-field-configs';

export default function DialogForm({
  type = 'call-me-back'
}: {
  type?: 'call-me-back' | 'i-have-a-question'
}) {
  const { setDialogContent } = useDialog();
  const { isMobile } = useResponsive();

  return <div className={styles.wrapper}>
    <h1 className={styles.title}>Закажите бесплатный звонок сейчас</h1>
    {isMobile && <div className={styles['image-wrapper']}>
      <Image className={styles.image} src='/dialog-form-photo.webp' fill alt='Специалист по ремонту холодильников' />
    </div>}
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