import React from 'react'

const Img = ({src, alt, design , handleOnClick}) => {
  return (

       <img
              src= {src}
              alt= {alt}
              className={design}
              onClick={()=> handleOnClick('home')}
            />
    
  )
}

export default Img
