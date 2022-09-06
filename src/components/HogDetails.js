import React from 'react'

function HogDetails({ hog }) {

  return (
    <div className="description">
      <strong>{hog.greased? "Greased" : "Not Greased" }</strong>
      <p>
        Highest medal achived: <strong>{hog["highest medal achieved"]}</strong>
      </p>
      <p>
        Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
        with Thru-the-Door Ice and Water: <strong>{hog.weight}</strong>
      </p>
    </div>
  )
}

export default HogDetails