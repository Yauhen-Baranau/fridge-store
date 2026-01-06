import composeClassName from '@src/helpers/compose-class-name';
import styles from './how-to-order-repairs.module.scss';
import React from 'react';
import BackgroundSnowflake from '../background-snowflake/background-snowflake';
import useResponsive from '@hooks/use-responsive';
import { stepFactory } from './helpers/step-factory';

export default function HowToOrderRepairs({ customClass }: { customClass?: string }) {
  const { isIpad, isMobile } = useResponsive();

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
        hasRightArrow: index < arr.length - 1,
        isIpad,
        styles,
      })}</React.Fragment>)}
    </div>
    {!isMobile
      ? <>
        <BackgroundSnowflake width={153} height={148} left={22} top={20} rotation={-30} color='main-white' />
        <BackgroundSnowflake width={153} height={148} right={22} top={20} rotation={-30} color='main-white' />
      </>
      : <>
        <BackgroundSnowflake width={60} height={58} left={15} top={25} rotation={-30} color='main-white' />
        <BackgroundSnowflake width={60} height={58} right={0} rotation={-30} color='main-white' customClass={styles['background-snowflake-2']} />
        <BackgroundSnowflake width={60} height={58} left={10} rotation={-30} color='main-white' customClass={styles['background-snowflake-3']} />
        <BackgroundSnowflake width={60} height={58} right={15} bottom={25} rotation={-30} color='main-white' />
      </>
    }
  </section>
}