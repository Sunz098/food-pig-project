import React from 'react'
import './itempostc.css'

function Itempost(props) {
  const{food, onBgClick} = props;
  return (
    <div className='item-post'>
        <div className='item-post-bg' onClick={onBgClick}></div>
        <div className='item-post-content'>
            <img src={food.thumnailUrl} alt="" />
            <h4>{food.title}</h4>
        </div>
    </div>
  )
}

export default Itempost