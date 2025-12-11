'use client';

import React from 'react';
import List from '../list/list';
import styles from './service-page-component.module.scss';
import Image from 'next/image';
import Form from '../form/form';
import ServicesGrid from '../services-grid/services-grid';

interface Service {
  label: string,
  description: Array<
    { type: 'paragraph', content: string }
    | { type: 'list', title: string, items: Array<string> }
  >,
  imagePath: string,
  price?: number,
}

export default function ServicePageComponent({
  service,
  subservices,
  preServiceGridContent,
}: {
  service: Service,
  subservices: Array<Service & { redirectTo: string }>,
  preServiceGridContent?: React.ReactNode,
}) {
  const constructCategoryDescription = (serviceData: Service) => {
    return <div className={styles['description-wrapper']}>
      <h1 className={styles['description-title']}>{serviceData.label}</h1>
      {serviceData.price && <div className={styles['description-price-block']}>
        <p className={styles['description-price']}>от {serviceData.price} руб.</p>
        <p className={styles['with-parts']}>Цена указана с учетом новых запчастей</p>
      </div>}
      <div className={styles.description}>
        {serviceData.description.map((descriptionItem, index) => {
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
        <Image className={styles['description-image']} src={serviceData.imagePath} width={570} height={350} alt='Изображение категории или услуги' />
      </div>
    </div>;
  };

  const description = service && constructCategoryDescription(service);
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
        Нажимая на кнопку &quot;Отправить&quot; Вы даете согласие на <span className={styles.blue}>обработку данных</span>
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
    {preServiceGridContent}
    <ServicesGrid services={subservices} />
  </div>

  return <div className={styles.service}>
    {description}
    {form}
    {content}
  </div>
}