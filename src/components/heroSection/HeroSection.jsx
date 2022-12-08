import React from 'react'
import './HeroSection.css';
import heroimage from '../../assets/images/herosection.png'
const HeroSection = () => {
    const _handleEmail=(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <section className='hero_section_bg'>
        <div className='container-xxl'>
            <div className='row align-items-center hero_row'>
                <div className='col-lg-6 col-md-6 col-sm-12 md_area_section'>
                    <div className='hero_detail'>
                        <h2>Easily and Securely Automate your Lightning Node</h2>
                        <p>Your Keys, Your coins, Your Node Private, Automated, Optimised for Reliability</p>
                    </div>
                    <form>
                    <div className='signup_section'>
                        <p>Sign up for Early Access</p>
                        <div className='search_section'>
                            
                            <input className='' placeholder='Enter Your Email... '/>
                            <button onClick={_handleEmail}>Get Early Access <span>&#x279D;</span></button>
                        </div>
                    </div>
                    </form>
                </div>    
                <div className='col-lg-6 col-md-6 col-sm-12 md_img_sec'>
                    <img src={heroimage} alt="herosection image" className='img-fluid'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection