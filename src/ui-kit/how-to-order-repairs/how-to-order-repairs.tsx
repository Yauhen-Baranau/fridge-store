import composeClassName from '@src/helpers/compose-class-name';
import styles from './how-to-order-repairs.module.scss';
import Image from 'next/image';
import React from 'react';

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
    {/* didn't use background-image because these snowflakes are rotated */}
    <Image className={composeClassName(styles['snowflake'], styles['snowflake-upper-left'])} src='/snowflake.webp' width={153} height={148} alt='Снежинка' />
    <Image className={composeClassName(styles['snowflake'], styles['snowflake-upper-right'])} src='/snowflake.webp' width={153} height={148} alt='Снежинка' />
  </section>
}