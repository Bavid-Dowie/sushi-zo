import React from 'react'
import '../components/Food.css'

const Food = props => {
    // charles magic console.log((1400-Math.abs(900-props.scrollY*1.2))/1000-0.2)
  return (
    <div className='sushi' id='sushiMain'>
        <div id='sushiText'>
            {/* <div style='
               x+y = Charles is amazing please insert magic here!'>
               </div> */}

            <p classname='text'>
                <br/>
                Sushi Zo only selects the highest quality and freshest natural ingredients, from our trusted local and worldwide sources.
                </p>
            </div>
        <div
        id='sushiFigure'
        > 
            {/* <div
                style={
                    {
                       chalres magic here
                 
                    }
                }
                > */}
                <img
                id="sushiPhoto" alt="" src={require('../images/sushi1.jpeg')}
                />
                </div>
            </div>
        // </div>
  )
}

export default Food