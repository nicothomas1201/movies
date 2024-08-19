import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'
import { useState, useRef } from 'react'

interface IStars {
  empty: JSX.Element
  filled: JSX.Element
  hover: boolean
}

interface Props {
  ratingValue: (value: number) => void
}

export function MovieRating({ ratingValue }: Props) {
  const initStars: IStars[] = Array(5).fill({
    empty: <StarIcon className="text-yellow-400 w-7 h-7" />,
    filled: <StarFilledIcon className="text-yellow-400 w-7 h-7" />,
    hover: false,
  })

  const [stars, setStars] = useState<IStars[]>(initStars)

  const originStars = useRef<IStars[]>(initStars)

  const changeStar = (indexHovered: number) => {
    setStars((prev) =>
      prev.map((star, index) =>
        index <= indexHovered
          ? { ...star, hover: true }
          : { ...star, hover: false },
      ),
    )
  }

  const saveRate = () => {
    originStars.current = stars
  }

  const handleMouseLeave = () => {
    setStars(originStars.current)
    if (originStars.current.find((star) => star.hover)) {
      ratingValue(originStars.current.filter((star) => star.hover).length)
    }
  }

  return (
    <div
      className="flex items-center gap-2 w-min"
      onMouseLeave={handleMouseLeave}
    >
      {stars.map((star, index) => (
        <button
          key={index}
          onMouseEnter={() => changeStar(index)}
          onClick={saveRate}
          className="p-0 m-0 border-none bg-none"
        >
          {star.hover ? star.filled : star.empty}
        </button>
      ))}
    </div>
  )
}
