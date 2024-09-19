import Carousel from '../Carousel'
import { type FC } from 'react'
import ReviewCard from './ReviewCard'
import useMediaQuery from '../../react/hooks/useMediaQuery'

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
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isPhone = useMediaQuery('(max-width: 480px)')

  const itemsPerPage = isPhone ? 1 : isMobile ? 2 : 3
  return (
    <Carousel
      gap={1}
      slides={reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
      itemsPerPage={itemsPerPage}
    />
  )
}

export default TestimonialCarousel
