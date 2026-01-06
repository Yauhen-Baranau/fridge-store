'use client';

import Button from '@ui-kit/button/button';
import styles from './page.module.scss';
import List from '@ui-kit/list/list';
import BackgroundSnowflake from '@ui-kit/background-snowflake/background-snowflake';
import useResponsive from '@hooks/use-responsive';
import { reviewListItemFactory } from './helpers/review-list-item-factory';

export default function ReviewsPage() {
  const { isMobile } = useResponsive();

  return <main className={styles.reviews}>
    <h1 className={styles.title}>Отзывы</h1>
    <Button
      customClass={styles['write-review-button']}
      style='monochrome'
      text='Написать отзыв'
    />
    <Button
      customClass={styles['view-all-reviews-button']}
      style='text-only'
      text='Больше отзывов на гугл картах'
    />
    <List customClass={styles['reviews-list']} items={[
      {
        reviewerName: 'Анна Ковальчук',
        rating: 5,
        comment: 'Обратилась в эту компанию впервые, заказывала генеральную уборку квартиры. Приехали два клинера, работали около 5-6 часов. Использовали профессиональную химию Grass, отчистили даже застарелые пятна на кухне. Очень довольна результатом, всё блестит!',
        images: [
          { path: '/water-bottles.webp', width: 570, height: 382 },
          { path: '/water-bottles.webp', width: 570, height: 382 },
          { path: '/water-bottles.webp', width: 570, height: 382 },
        ],
        reviewTimestamp: 1763240400000,
      },
      {
        reviewerName: 'Анна Ковальчук',
        rating: 3,
        comment: 'Обратилась в эту компанию впервые, заказывала генеральную уборку квартиры. Приехали два клинера, работали около 5-6 часов. Использовали профессиональную химию Grass, отчистили даже застарелые пятна на кухне. Очень довольна результатом, всё блестит!',
        reviewTimestamp: 0,
      },
      {
        reviewerName: 'Анна Ковальчук',
        rating: 4,
        comment: 'Обратилась в эту компанию впервые, заказывала генеральную уборку квартиры. Приехали два клинера, работали около 5-6 часов. Использовали профессиональную химию Grass, отчистили даже застарелые пятна на кухне. Очень довольна результатом, всё блестит!',
        images: [
          { path: '/water-bottles.webp', width: 570, height: 382 },
        ],
        reviewTimestamp: 1668546000000,
      },
    ].map(params => reviewListItemFactory({ ...params, isMobile, styles }))} />
    {!isMobile && <>
      <BackgroundSnowflake width={613} height={595} right={43} top={909} rotation={-30} color='light-blue' />
      <BackgroundSnowflake width={341} height={331} right={43} top={909} rotation={-30} color='light-blue' />
    </>}
  </main>
}