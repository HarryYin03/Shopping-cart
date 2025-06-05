import React from 'react'
import './gameRating.css'

function GameRating({rating}) {
    const stars = Math.max(0, Math.min(10, rating));

  return (
    <div className="gameRating">
      <span className="numericRating">
        {stars.toFixed(1)} / 10
      </span>
    </div>
  )
}

export default GameRating
