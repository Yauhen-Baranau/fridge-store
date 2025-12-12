import composeClassName from '@src/helpers/compose-class-name';
import styles from './how-to-order-repairs.module.scss';
import Image from 'next/image';
import React from 'react';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';

export default function HowToOrderRepairs({ customClass }: { customClass?: string }) {
  const stepFactory = ({
    stepNumber,
    iconPath,
    description,
    hasRightArrow = true,
  }: {
    stepNumber: number,
    iconPath: string,
    description: string,
    hasRightArrow?: boolean,
  }) => {
    return <>
      <div className={styles.step}>
        <h6 className={styles['step-title']}>{stepNumber} шаг</h6>
        <Image className={styles['step-icon']} src={iconPath} width={46} height={46} alt='Иконка' />
        <p className={styles['step-description']}>{description}</p>
      </div>
      {hasRightArrow && <Image className={styles['arrow-right-icon']} src='/icons/arrow-right.svg' width={44} height={44} alt='Стрелка вправо' />}
    </>
  };

  return <section className={composeClassName(styles['how-to-order-repairs'], customClass)}>
    <h1 className={styles.title}>Как заказать ремонт?</h1>
    <div className={styles.steps}>
      {[
        { iconPath: '/icons/document.svg', description: 'Оформите заявку онлайн или позвоните менеджеру, узнайте предварительную стоимость ремонта' },
        { iconPath: '/icons/suitcase.svg', description: 'Мастер проводит диагностику и называет точную цену ремонта' },
        { iconPath: '/icons/wrench.svg', description: 'Проводим ремонт холодильника и оформляем гарантию' },
      ].map((params, index, arr) => <React.Fragment key={index}>{stepFactory({
        ...params,
        stepNumber: index + 1,
        hasRightArrow: index < arr.length - 1
      })}</React.Fragment>)}
    </div>
    <BackgroundSnowflake width={153} height={148} left={22} top={20} rotation={-30} color='main-white' />
    <BackgroundSnowflake width={153} height={148} right={22} top={20} rotation={-30} color='main-white' />
  </section>
}