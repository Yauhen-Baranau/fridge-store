'use client';

import Button from '@ui-kit/button/button';
import styles from './page.module.scss';
import List from '@ui-kit/list/list';
import ImagePreview from '@ui-kit/image-preview/image-preview';
import Stars from '@ui-kit/stars/stars';
import getTimelapseText from '@helpers/get-timelapse-text';
import BackgroundSnowflake from '@ui-kit/background-snowflake/background-snowflake';

export default function ReviewsPage() {
  const reviewListItemFactory = ({
    reviewerName,
    rating,
    comment,
    images = [],
    reviewTimestamp = 0,
  }: {
    reviewerName: string,
    rating: number,
    comment: string,
    images?: Array<{ path: string, width: number, height: number }>,
    reviewTimestamp?: number,
  }) => {
    return {
      content: <div className={styles.review}>
        <h3 className={styles['reviewer-name']}>{reviewerName}</h3>
        <Stars customClass={styles['review-stars']} stars={rating} />&nbsp;&nbsp;<span className={styles['review-number-rating']}>{Math.round(rating)},0</span>
        <p className={styles['review-comment']}>{comment}</p>
        <div className={styles['review-images']}>
          {images.map(({ path, width, height }, index) => <ImagePreview
            key={index}
            path={path}
            previewWidth={140}
            previewHeight={140}
            fullWidth={width}
            fullHeight={height}
          />)}
        </div>
        <span className={styles['review-timestamp']}>{getTimelapseText(new Date(reviewTimestamp))}</span>
      </div>
    }
  };

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
    ].map(reviewListItemFactory)} />
    <BackgroundSnowflake width={613} height={595} right={43} top={909} rotation={-30} color='light-blue' />
    <BackgroundSnowflake width={341} height={331} right={43} top={909} rotation={-30} color='light-blue' />
  </main>
}