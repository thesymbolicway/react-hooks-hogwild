import React, {useState} from 'react'
import HogDetails from "./HogDetails"

function HogCard({hog}) {
 
    const [showDetails, setShowDetails]= useState(false)

    function handleDetails(){
        setShowDetails(showDetails => !showDetails) 
    }

    return (
        <div className="ui card eight wide column pigTile">
          <div className="image">
            <img src={hog.image} alt={hog.name}/>
          </div>
          <div className="content">
            <h3 className="header">{hog.name}</h3>
            <div className="description">Specialty: {hog.specialty} </div>
          </div>
          <div className="extra content">
            {showDetails ? <HogDetails hog={hog} key={hog.name}/> : null}
    
            <button className="ui button" onClick={handleDetails}>
            More Info
            </button>
            {/* <button className="ui button" onClick={() => setIsHidden(true)}>
              Hide Me{" "}
              <span role="img" aria-label="snout">
                🐽
              </span>
            </button> */}
          </div>
        </div>
      );
    }

export default HogCard