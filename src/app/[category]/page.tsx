'use client';

import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import Form from '@src/ui-kit/form/form';
import { Routes } from "@constants/routes";
import List from '@src/ui-kit/list/list';
import React, { useMemo } from 'react';
import Image from 'next/image';
import categories from './category-structure/categories.json';
import allSubсategories from './category-structure/subcategories.json';
import ServicesGrid from '@src/ui-kit/services-grid/services-grid';

const routeToCategoryIdMap: Map<Routes, string> = new Map([
  [Routes.FridgeRepairServices, '1'],
]);

interface Category {
  id: string,
  label: string,
  description: Array<
    { type: 'paragraph', content: string }
    | { type: 'list', title: string, items: Array<string> }
  >,
  imagePath: string,
}

interface Subcategory {
  parentCategoryId: string,
  label: string,
  price: number,
  imagePath: string,
}

export default function Category() {
  const params = useParams();
  const categoryId = routeToCategoryIdMap.get(`${params.category}` as Routes);
  const subcategories = useMemo(() => {
    return (allSubсategories as Array<Subcategory>).filter(subcategory => subcategory.parentCategoryId === categoryId);
  }, [categoryId]);
  const categoryData = categories.find(category => category.id === categoryId) as Category;

  const constructCategoryDescription = (categoryData: Category) => {
    return <div className={styles['description-wrapper']}>
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
    </div>;
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
  const content = <div className={styles['content-wrapper']}>
    <ServicesGrid services={subcategories} />
  </div>

  return categoryData && <main className={styles.category}>
    {description}
    {form}
    {content}
  </main>
}