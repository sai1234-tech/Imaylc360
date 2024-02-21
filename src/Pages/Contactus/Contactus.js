import React from 'react'
import '../Contactus/Contactus.css'
import bgcontactus from '../../Assets/contactusbg.png'
import Footer from '../../Components/Footer/Footer'

function Contactus() {
    return (
        <div className='contact-us-main-div_holder'>
            <div className='contactus_site_sub_div_margin_top'>
            </div>
            <div className='contact-us-main-div'>
                <div className='backgroundimage_contactuse_holder_div d-flex flex-column align-items-center' style={{ backgroundImage: `url(${bgcontactus})` }} >
                    <div className='start_trail_contactus_holder_div'>
                        <span>START A TRIAL</span>
                    </div>
                    <div className='Test_drive_the_contactus'>
                        <span>Test drive the full iMayl  experience, free for 30-days.</span>
                    </div>
                    <button className='getstartedContact_us'>Get Started</button>
                </div>
                <div className='northamerica_europe_support_holder-div'>
                    <div className='northamerica_europe_support_sub-divs d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#CBC1B7'}}>
                        <span>North America</span>
                        <span> 866-604-6295</span>
                        <span>sales@imayl.com</span>
                    </div>
                    <div className='northamerica_europe_support_sub-divs d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#FF9900'}} >
                    <span>Europe</span>
                        <span>  + 49 (0) 622-773-4121 </span>
                        <span>europesales@imayl.com</span>
                    </div>
                    <div className='northamerica_europe_support_sub-divs d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#F7751F'}}>
                    <span>Support</span>
                        <span> 888-464-2360</span>
                        <span>support@imayl.com</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contactus