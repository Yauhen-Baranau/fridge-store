import List, { ListItem } from '@src/ui-kit/list/list';
import styles from './main-advantages.module.scss';
import composeClassName from '@src/helpers/compose-class-name';

export default function MainAdvantages() {
  const advantageFactory = ({
    imagePath,
    title,
    subtitle,
    items
  }: {
    imagePath: string,
    title: string,
    subtitle?: string,
    items: Array<ListItem>
  }) => {
    return <div className={styles.advantage}>
      <div className={styles['advantage-header']}>
        <img src={imagePath} width={46} height={46} />
        <h2 className={styles['advantage-title']}>
          {title}
          {subtitle && <>
            <br />
            <span className={styles['advantage-subtitle']}>{subtitle}</span>
          </>}
        </h2>
      </div>
      <List customClass={styles['advantage-content']} items={items} />
    </div>
  };

  return <section className={styles['main-advantages']}>
    <h1 className={styles.title}>
      Основные преимущества <br />
      нашей компании
    </h1>
    <div className={styles['advantages-block']}>
      {advantageFactory({
        imagePath: 'icons/clock-bg.webp',
        title: 'Быстро',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Ремонт в день заявки' },
          { iconPath: 'icons/circle.webp', content: 'От 15 минут до 24 часов, в зависимости от поломки' },
        ]
      })}
      {advantageFactory({
        imagePath: 'icons/calendar-bg.webp',
        title: 'Ежедневно',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Пн-Вс с 08:00 до 21:00' },
          { iconPath: 'icons/circle.webp', content: 'Без выходных' },
        ]
      })}
      {advantageFactory({
        imagePath: 'icons/medal-bg.webp',
        title: 'С гарантией',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Опытные мастера' },
          { iconPath: 'icons/circle.webp', content: 'От 3 до 12 месяцев гарантии' },
          { iconPath: 'icons/circle.webp', content: 'Гарантийный талон' },
        ]
      })}
      {advantageFactory({
        imagePath: 'icons/wallet-bg.webp',
        title: 'Недорого',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Низкие цены на ремонт' },
          { iconPath: 'icons/circle.webp', content: 'Ремонт от 35 руб.' },
        ]
      })}
      {advantageFactory({
        imagePath: 'icons/piggybank-bg.webp',
        title: 'Бесплатно',
        subtitle: 'При выполнении ремонта',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Диагностика техники' },
          { iconPath: 'icons/circle.webp', content: 'Выезд мастера на дом' },
        ]
      })}
      {advantageFactory({
        imagePath: 'icons/tick-bg.webp',
        title: 'Без б/у запчастей',
        items: [
          { iconPath: 'icons/circle.webp', content: 'Оригинальные запчасти' },
          { iconPath: 'icons/circle.webp', content: 'Если деталь вышла из строя, заменяем ее на новую' },
        ]
      })}
    </div>
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-left'])} />
    <img src='snowflake.webp' width={131} height={127} className={composeClassName(styles['snowflake'], styles['snowflake-upper-right'])} />
  </section>
}