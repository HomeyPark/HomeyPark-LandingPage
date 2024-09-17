import type { FC, HTMLAttributes } from 'react'

import styles from './Dot.module.css'

interface DotsProps extends HTMLAttributes<HTMLButtonElement> {
  currentSlide: number
  index: number
}
const Dot: FC<DotsProps> = ({ currentSlide, index, ...props }) => {
  return (
    <button
      className={`${styles.dot} ${currentSlide === index ? styles.activeDot : styles.dot}`}
      {...props}
    />
  )
}

export default Dot
