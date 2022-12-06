import React, { useState } from 'react'
import './OperatingNode.css';
import icon1 from '../../assets/images/Sync.png';
import icon2 from '../../assets/images/Globe.png';
import icon3 from '../../assets/images/BarChart.png';
import icon4 from '../../assets/images/Activity.png'
import Abs_Operate from '../../absComponent/abs_Operate/Abs_Operate';
const OperatingNode = () => {
    const [operateData,setOperateData]=useState([
        {
            icon:icon1,
            operate_card_heading:"Automated Liquidity Management",
            opeate_card_para:"Automatically open channels with ease, and never worry about manually balancing channels again. Birkeland connects you with reliable, liquid, and well-connected nodes to be able to optimise your liquidity management."
        },
        {
            icon:icon2,
            operate_card_heading:"Tor No More",
            opeate_card_para:"Privately coordinate and securely communicate with peers using a VPN to handle node networking and communications. Run your lightning node over the clearnet without worrying about Tor issues ever again."
        },
        {
            icon:icon3,
            operate_card_heading:"Node and Peer Analytics Over Time",
            opeate_card_para:"Gain insight over both your node’s past performance as well as your peers. Review your transaction history enabling you to make better decisions in the future." 
        },
        {
            icon:icon4,
            operate_card_heading:"Node First Aid",
            opeate_card_para:"Monitor your node’s uptime and reliability with our automated health-check services. Get alerts when your node is not responsive, and address any issues as soon as they arise." 
        }
    ])
  return (
    <>
    <section className='operating_node_bg'>
        <div className='container-xxl'>
            <div className='row justify-content-center operate_row'>
                <div className='col-lg-8 col-md-10 col-sm-12 text-center'>
                    <div className='operate_heading_section'>
                        <h2>Operating a Lightning Node is Hard</h2>
                        <p>We make it easy without sacraficing privacy, security, or self-custody.</p>
                        </div>
                </div>
            </div>
            <div className='row operate_row'>
                {
                    operateData.map((e,idx)=>
                    <div className='col-lg-6 col-md-6 col-sm-12' key={idx}>
                            <Abs_Operate
                            icon={e.icon}
                            operate_card_heading={e.operate_card_heading}
                            opeate_card_para={e.opeate_card_para}
                            />
                    </div>
                    )
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default OperatingNode