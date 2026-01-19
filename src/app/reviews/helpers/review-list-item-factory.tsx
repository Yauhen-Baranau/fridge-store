import getTimelapseText from "@helpers/get-timelapse-text";
import ImagePreview from "@ui-kit/image-preview/image-preview";
import Stars from "@ui-kit/stars/stars";

export const reviewListItemFactory = ({
  reviewerName,
  rating,
  comment,
  images = [],
  reviewTimestamp = 0,
  isMobile,
  styles,
}: {
  reviewerName: string;
  rating: number;
  comment: string;
  images?: Array<{ path: string; width: number; height: number }>;
  reviewTimestamp?: number;
  isMobile: boolean;
  styles: Record<string, string>;
}) => {
  const reviewDate = new Date(reviewTimestamp);

  return {
    content: (
      <div className={styles.review} itemScope itemType={'https://schema.org/Review'}>
        <h3 className={styles["reviewer-name"]} itemProp='author' itemScope itemType='https://schema.org/Person'>
          <span itemProp='name'>{reviewerName}</span>
        </h3>
        <Stars customClass={styles["review-stars"]} stars={rating} />
        &nbsp;&nbsp;
        <span className={styles["review-number-rating"]} itemProp='reviewRating' itemScope itemType='https://schema.org/Rating'>
          <span itemProp='ratingValue'>{Math.round(rating)},0</span>
        </span>
        <p className={styles["review-comment"]} itemProp='reviewBody'>{comment}</p>
        <div className={styles["review-images"]}>
          {images.map(({ path, width, height }, index) => (
            <ImagePreview
              key={index}
              path={path}
              previewWidth={isMobile ? 70 : 140}
              previewHeight={isMobile ? 70 : 140}
              fullWidth={width}
              fullHeight={height}
            />
          ))}
        </div>
        <span className={styles["review-timestamp"]} >
          {getTimelapseText(reviewDate)}
        </span>

        <div hidden>
          <span itemProp='datePublished'>{reviewDate.toISOString()}</span>
          <div itemProp='itemReviewed' itemScope itemType='https://schema.org/LocalBusiness'>
            <span itemProp='name'>Ремонт холодильников</span>
          </div>
        </div>
      </div>
    ),
  };
};
