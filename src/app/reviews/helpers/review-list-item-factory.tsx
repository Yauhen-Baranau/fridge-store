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
    reviewerName: string,
    rating: number,
    comment: string,
    images?: Array<{ path: string, width: number, height: number }>,
    reviewTimestamp?: number,
    isMobile: boolean,
    styles: Record<string, string>,
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
            previewWidth={isMobile ? 70 : 140}
            previewHeight={isMobile ? 70 : 140}
            fullWidth={width}
            fullHeight={height}
          />)}
        </div>
        <span className={styles['review-timestamp']}>{getTimelapseText(new Date(reviewTimestamp))}</span>
      </div>
    }
  };