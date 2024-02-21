import React from 'react'
import '../../Pages/Home/Home.css'
import calllogo from '../../Assets/calllogo.png';
import fb from '../../Assets/fb.png';
import tw from '../../Assets/tw.png';
// import gplus from '../../Assets/gplus.png';
import linkedin from '../../Assets/Linkedin.png';

import yt from '../../Assets/yt.png';


function Footer() {

 

    const handleclickfb = () => {
        const url = 'https://www.facebook.com/IMAYLL';
        window.open(url, '_blank');
    }

    const handleclicktw = () => {
        const url = 'https://twitter.com/IMAYLN';
        window.open(url, '_blank');
    }

    const handleclicklinkedin = () => {
        const url = 'https://www.linkedin.com/company/imayl-inc-/mycompany/';
        window.open(url, '_blank');
    }

    const handleclickyt = () => {
        const url = 'https://www.youtube.com/channel/UC2M3DRik3anrdGKbcDEzhBQ';
        window.open(url, '_blank');
    }

    const handleclickrequestcall = () => {
        const url = 'https://cloud.imayl.com/requestcall.html';
        window.open(url, '_blank');
    }

    const handleclickterms = () => {
        const url = 'https://cloud.imayl.com/termsconditions.html';
        window.open(url, '_blank');
    }

    const handleclickimaylinc = () => {
        const url = 'https://imayl.com/';
        window.open(url, '_blank');
    }

    const handlcallclicked = () => {
        const phoneNumber = '8884642360';
        window.location.href = `tel:${phoneNumber}`;
    }

    return (
        <>
            <div className='footer_main_div d-flex flex-column align-items-center justify-content-center' >
                <div className='footer_img_text_holder_sub  d-flex flex-column justify-content-center align-items-center'>
                    <img className='calllogo' style={{ cursor: 'pointer' }} onClick={handlcallclicked} src={calllogo} />
                    <span className='footer_span_tag'>888-464-2360</span>
                    <span className='footer_span_tag'>info@imayl.com</span>
                    <span className='footer_span_tag'>Speak with a package management
                        specialist to learn more about
                        how iMayl can help your needs.</span>
                </div>
                <div className='icons_parent_div_imayl d-flex align-items-center'>
                    <span className='footer_follow_txt'>Follow</span>
                    <span className='footer_imayl_txt'>iMayl</span>
                    <img className='icons_img_tw' src={tw} onClick={handleclicktw} />
                    <img className='icons_img' src={fb} onClick={handleclickfb} />
                    <img className='icons_img_tw' src={linkedin} onClick={handleclicklinkedin} />
                    <img className='icons_img' src={yt} onClick={handleclickyt} />
                </div>
            </div>
            <div className='sub_footer_main_div d-flex align-items-center justify-content-md-between flex-column flex-md-row'>
                <span className='IMAYL_INC' style={{ cursor: 'pointer' }} onClick={handleclickimaylinc}>IMAYL, INC.</span>
                <span className='IMAYL_INC' style={{ cursor: 'pointer' }} onClick={handleclickrequestcall}> REQUEST A CALL</span>
                {/* <div className='d-flex terms_holder '> */}
                <span className='Policy' style={{ cursor: 'pointer' }} onClick={handleclickterms}>TERMS OF USE </span>
                {/* <span className='Policy' style={{ cursor: 'pointer' }} onClick={handleclickpolicy}>Privacy Policy</span> */}
                {/* </div> */}

            </div>
        </>
    )
}

export default Footer