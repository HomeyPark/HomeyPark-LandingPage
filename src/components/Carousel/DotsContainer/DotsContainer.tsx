import React, { useMemo, type FC } from 'react'
import styles from './DotsContainer.module.css'
import Dot from '../Dot'

interface DotsContainerProps {
  currentSlide: number
  slides: React.ReactNode[]
  itemsPerPage: number
  onChangePage: (index: number) => void
}

const DotsContainer: FC<DotsContainerProps> = ({
  currentSlide,
  slides,
  itemsPerPage,
  onChangePage,
}) => {
  const totalDots = useMemo(
    () => Math.ceil(slides.length / itemsPerPage),
    [slides.length, itemsPerPage]
  )

  return (
    <div className={`${styles.dotsContainer} absolute -top-7 right-2`}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <Dot
          currentSlide={currentSlide}
          index={index}
          key={index}
          onClick={() => onChangePage(index)}
        />
      ))}
    </div>
  )
}

export default DotsContainer
