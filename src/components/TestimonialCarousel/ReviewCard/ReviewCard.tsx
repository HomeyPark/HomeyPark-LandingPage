import { type FC } from 'react'
import styles from './ReviewCard.module.css'
import Image from 'astro/components/Image.astro'

interface Review {
  imageSrc: string
  name: string
  address: string
  rating: number
  review: string
}

interface ReviewCardProps {
  review: Review
}
const ReviewCard: FC<ReviewCardProps> = ({
  review: { imageSrc, name, address, rating, review },
}) => {
  return (
    <article className={`${styles.reviewCard} shadow-md`}>
      <header className={styles.reviewCardHeader}>
        <div className={styles.reviewerProfileImg}>
          <img src={imageSrc} alt={name} loading="lazy" />
        </div>
        <div className="flex w-full">
          <div className={styles.reviewerInfo}>
            <span className={`body-1 text-lg ${styles.reviewerName}`}>
              {name}
            </span>
            <span className={`body-2 ${styles.reviewerAddress}`}>
              {address}
            </span>
          </div>
          <div className={styles.ratingContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M18.8039 8.97274L15.2882 12.0063L16.3593 16.5431C16.4184 16.7893 16.4032 17.0476 16.3156 17.2852C16.228 17.5229 16.0719 17.7292 15.8671 17.8782C15.6623 18.0272 15.4179 18.1121 15.1648 18.1222C14.9118 18.1324 14.6614 18.0673 14.4453 17.9352L10.5 15.5071L6.5523 17.9352C6.33622 18.0666 6.08613 18.131 5.8335 18.1205C5.58087 18.11 5.337 18.0249 5.13261 17.8761C4.92822 17.7272 4.77243 17.5212 4.68488 17.284C4.59732 17.0468 4.58191 16.789 4.64058 16.5431L5.71558 12.0063L2.19995 8.97274C2.00878 8.80752 1.87052 8.58963 1.80244 8.34629C1.73436 8.10296 1.73947 7.84496 1.81715 7.60452C1.89483 7.36407 2.04162 7.15184 2.23919 6.99432C2.43677 6.83681 2.67637 6.74099 2.92808 6.71884L7.53745 6.34696L9.31558 2.04384C9.41182 1.80932 9.57563 1.60872 9.78618 1.46754C9.99673 1.32636 10.2445 1.25098 10.498 1.25098C10.7515 1.25098 10.9993 1.32636 11.2098 1.46754C11.4204 1.60872 11.5842 1.80932 11.6804 2.04384L13.4578 6.34696L18.0671 6.71884C18.3193 6.74017 18.5596 6.83545 18.7579 6.99275C18.9562 7.15005 19.1037 7.36236 19.1819 7.6031C19.26 7.84383 19.2654 8.10228 19.1973 8.34606C19.1292 8.58984 18.9907 8.80811 18.7992 8.97352L18.8039 8.97274Z"
                fill="#EF6C42"
              />
            </svg>
            <span className={`body-2 ${styles.rating}`}>
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </header>
      <blockquote className={`body-2 ${styles.reviewContent}`}>
        {review}
      </blockquote>
    </article>
  )
}

export default ReviewCard
