"use client";

import Button from "@ui-kit/button/button";
import styles from "./page.module.scss";
import List from "@ui-kit/list/list";
import useResponsive from "@hooks/use-responsive";
import { reviewListItemFactory } from "./helpers/review-list-item-factory";
import { mockReviews } from "./mock/reviews";
import BackgroundSnowflakes from "@ui-kit/background-snowflakes/background-snowflakes";

export default function ReviewsPage() {
  const { isMobile } = useResponsive();

  return (
    <main className={styles.reviews}>
      <h1 className={styles.title}>Отзывы</h1>
      <Button
        customClass={styles["write-review-button"]}
        style="monochrome"
        text="Написать отзыв"
      />
      <Button
        customClass={styles["view-all-reviews-button"]}
        style="text-only"
        text="Больше отзывов на гугл картах"
      />
      <List
        customClass={styles["reviews-list"]}
        items={mockReviews.map((params) => reviewListItemFactory({ ...params, isMobile, styles }))}
      />
      <BackgroundSnowflakes snowflakes={[
        {
          snowflakeParams: { width: 613, height: 595, right: 43, top: 909, rotation: -30, color: "light-blue" },
          desktop: true,
          ipad: true,
        },
        {
          snowflakeParams: { width: 341, height: 331, right: 43, top: 909, rotation: -30, color: "light-blue" },
          desktop: true,
          ipad: true,
        },
      ]} />
    </main>
  );
}
