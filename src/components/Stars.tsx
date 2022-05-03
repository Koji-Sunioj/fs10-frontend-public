import React from 'react'

const Stars = (rating: number, id: number) => {
  const children = [1, 2, 3, 4, 5].map((val, index) => {
    const checkStar: number = val - rating
    let iconClass
    if (checkStar < 0.3) {
      iconClass = 'bi bi-star-fill'
    } else if (checkStar >= 0.3 && checkStar < 0.7) {
      iconClass = 'bi bi-star-half'
    } else {
      iconClass = 'bi bi-star'
    }
    return <i className={iconClass} key={`${id}-${index}`}></i>
  })

  return (
    <span title={String(rating)} className="stars">
      {children}
    </span>
  )
}

export default Stars
