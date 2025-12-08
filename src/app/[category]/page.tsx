'use client';

import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import Form from '@src/ui-kit/form/form';
import { Routes } from "@constants/routes";
import categories from './category-structure/categories.json';
import List from '@src/ui-kit/list/list';
import React from 'react';
import Image from 'next/image';

const routeToCategoryIdMap: Map<Routes, string> = new Map([
  [Routes.FridgeRepairServices, '1'],
]);

interface CategoryData {
  label: string,
  description: Array<
    { type: 'paragraph', content: string }
    | { type: 'list', title: string, items: Array<string> }
  >,
  imagePath: string,
}

export default function Category() {
  const params = useParams();
  const categoryId = routeToCategoryIdMap.get(`${params.category}` as Routes);
  const categoryData = categories.find(category => category.id === categoryId) as CategoryData;

  const constructCategoryDescription = (categoryData: CategoryData) => {
    return <>
      <h1 className={styles['description-title']}>{categoryData.label}</h1>
      <div className={styles.description}>
        {categoryData.description.map((descriptionItem, index) => {
          let descriptionItemContent;
          switch (descriptionItem.type) {
            case 'paragraph':
              descriptionItemContent = <p className={styles['description-text']}>{descriptionItem.content}</p>;
              break;
            case 'list':
              descriptionItemContent = <>
                <h3 className={styles['description-list-title']}>{descriptionItem.title}</h3>
                <List customClass={styles['description-list']} items={descriptionItem.items.map(item => ({
                  content: item,
                  icon: {
                    path: '/icons/square-small-blue.svg',
                    width: 10,
                    height: 10,
                  }
                }))} />
              </>;
              break;
            default:
              descriptionItemContent = <></>;
              break;
          }
          return <React.Fragment key={index}>{descriptionItemContent}</React.Fragment>
        })}
        <Image className={styles['description-image']} src={categoryData.imagePath} width={570} height={350} alt='Специалист по ремонту холодильников' />
      </div>
    </>;
  };

  const description = categoryData && constructCategoryDescription(categoryData);
  const form = <Form
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
  const content = <></>;

  return categoryData && <main className={styles.category}>
    <div className={styles['description-wrapper']}>{description}</div>
    {form}
    <div className={styles['content-wrapper']}>{content}</div>
  </main>
}