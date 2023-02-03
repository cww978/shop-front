import React from 'react'
import './index.less'

interface propTitle {
  text: string
}

const Titile = (prop:propTitle) => {
  return (
    <div className='custom-title'>
      {prop.text}
    </div>
  )
}

export default Titile
