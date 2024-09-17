import Carousel from '../Carousel'
import { type FC } from 'react'
import ReviewCard from './ReviewCard'

interface Review {
  imageSrc: string
  name: string
  address: string
  rating: number
  review: string
}

interface TestimonialCarouselProps {
  reviews: Review[]
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ reviews }) => {
  return (
    <Carousel
      gap={1}
      slides={reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
      itemsPerPage={3}
    />
  )
}

export default TestimonialCarousel
