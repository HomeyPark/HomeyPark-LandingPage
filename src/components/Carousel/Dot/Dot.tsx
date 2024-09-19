import { useMemo, type FC, type HTMLAttributes } from 'react'

import styles from './Dot.module.css'

interface DotsProps extends HTMLAttributes<HTMLButtonElement> {
  currentSlide: number
  index: number
}
const Dot: FC<DotsProps> = ({ currentSlide, index, ...props }) => {
  const isActive = useMemo(() => currentSlide === index, [currentSlide, index])

  return (
    <button
      className={`w-2.5 h-2.5 rounded-full outline-none border-none transition-all cursor-pointer bg-[#d9d9d9] ${
        isActive ? '!w-6 !bg-[#55aa87]' : ''
      }`}
      {...props}
    />
  )
}

export default Dot
