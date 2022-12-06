import React from 'react'
import './Abs_Operate.css';
const Abs_Operate = (props) => {
    const {icon , operate_card_heading , opeate_card_para}=props;
  return (
    <>
        <div className='operate_card_wrapper'>
            <div className='icon_left'>
                <img src={icon} alt="icon"/>
            </div>
            <div className='operate_detail'>
                <h2>{operate_card_heading}</h2>
                <p>{opeate_card_para}</p>
            </div>
        </div>
    </>
  )
}

export default Abs_Operate;