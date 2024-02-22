import React from 'react'
import '../Contactus/Contactus.css'
import '../RequestDemo/RequestDemo.css'
import bgcontactus from '../../Assets/contactusbg.png'
import Footer from '../../Components/Footer/Footer'
import Requestform from '../../Components/RequestForm/Requestform'

function Requestcall() {
    return (
        <div className='contact-us-main-div_holder'>
            <div className='contactus_site_sub_div_margin_top'>
            </div>
            <div className='contact-us-main-div'>
                <div className='backgroundimage_contactuse_holder_div_requestdemo d-flex flex-column align-items-center' style={{ backgroundImage: `url(${bgcontactus})` }} >
                    <div className='start_trail_contactus_holder_div'>
                        <span>GET STARTED WITH OUR PACKAGE
                            MANAGEMENT SOFTWARE TODAY</span>
                    </div>
                    <div className='requestdemo_div_boxes_divs_holder'>
                        <div className='you_run_profitable d-flex align-items-center justify-content-center' style={{background:'#F5BA34'}}>
                            <span>WHEN YOU RUN REAL-TIME</span>
                        </div>
                        <div className='you_run_profitable d-flex align-items-center justify-content-center' style={{background:'#1E6792'}}>
                            <span>YOU RUN PROFITABLE</span>
                        </div>
                    </div>
                </div>
                <div className='northamerica_europe_support_holder-div'>
                   <Requestform/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Requestcall;