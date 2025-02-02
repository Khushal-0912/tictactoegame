import React from 'react'

const Boxes = (props) => {
    console.log(props.value);
    
  return (
    <div>
        <div className='box' onClick={props.onClick}>
            <p >{props.value} </p>
        </div>
       
    </div>
  )
}

export default Boxes