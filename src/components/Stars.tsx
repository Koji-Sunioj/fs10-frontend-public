import React from 'react'

const Stars = (rating: any) => {
  const children = [1, 2, 3, 4, 5].map((val) => {
    const test: any = (val - rating).toFixed(2)
    if (test < 0.3) {
      return <i className="bi bi-star-fill" key={test}></i>
    } else if (test >= 0.3 && test < 0.7) {
      return <i className="bi bi-star-half" key={test}></i>
    } else {
      return <i className="bi bi-star" key={test}></i>
    }
  })
  return (
    <span title={rating} className="stars">
      {children}
    </span>
  )
}

export default Stars
