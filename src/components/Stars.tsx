import React, { ReactElement } from 'react'

const Stars = (rating: number, id: number) => {
  const starIcon = (type: string, id: number, index: number): ReactElement => {
    return <i className={type} key={`${id}-${index}`}></i>
  }

  const children = [1, 2, 3, 4, 5].map((val, index) => {
    const checkStar: number = val - rating
    if (checkStar < 0.3) {
      return starIcon('bi bi-star-fill', id, index)
    } else if (checkStar >= 0.3 && checkStar < 0.7) {
      return starIcon('bi bi-star-half', id, index)
    } else {
      return starIcon('bi bi-star', id, index)
    }
  })

  return (
    <span title={String(rating)} className="stars">
      {children}
    </span>
  )
}

export default Stars
