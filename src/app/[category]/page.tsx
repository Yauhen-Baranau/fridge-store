'use client';

import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import Form from '@src/ui-kit/form/form';

import { Routes } from "@constants/routes";
import FridgeRepairServicesCategoryDescription from './components/fridge-repair-services/description/description';
import FridgeRepairServicesCategoryContent from './components/fridge-repair-services/content/content';

interface CategoryData {
  label: string,
  description: React.ReactNode,
  content: React.ReactNode,
}

const categoryDataByRoute: Map<string, CategoryData> = new Map([
  [Routes.FridgeRepairServices, {
    label: 'Услуги по ремонту холодильников',
    description: <FridgeRepairServicesCategoryDescription />,
    content: <FridgeRepairServicesCategoryContent />
  }]
]);

export default function Category() {
  const params = useParams();
  const categoryData = categoryDataByRoute.get(`${params.category}`);

  return categoryData && <main className={styles.category}>
    <div className={styles['description-wrapper']}>{categoryData.description}</div>
    <Form
      customClass={styles.form}
      preFieldsContent={<>
        <h3 className={styles['form-title']}>Оформить заказ</h3>
        <p className={styles['form-subtitle']}>Оставьте заявку на оформление заказа и&nbsp;мы Вам перезвоним в ближайшее время</p>
      </>}
      submitButtonText='Получить консультацию'
      submitCallback={console.log}
      preSubmitButtonContent={
        <p className={styles['privacy-policy-notice']}>
          Нажимая на кнопку "Отправить" Вы даете согласие на <span className={styles.blue}>обработку данных</span>
        </p>
      }
      config={{
        fieldConfigs: [
          { type: 'text', name: 'name', placeholder: 'Имя' },
          { type: 'text', name: 'phone', placeholder: 'Телефон' }
        ]
      }}
    />
    <div className={styles['content-wrapper']}>{categoryData.content}</div>
  </main>
}