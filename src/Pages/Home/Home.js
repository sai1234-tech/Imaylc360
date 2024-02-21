import React from 'react'
import './Home.css'
import experience from '../../Assets/experience.png';
import imayledge from '../../Assets/imayledge.png';
import logpackage from '../../Assets/logpackage.png';
import trackpackage from '../../Assets/trackpackage.png';
import Deliever from '../../Assets/delieverpackage.png'
import howit from '../../Assets/howit.png';
import getimayl from '../../Assets/getimayl.png';
import getimaylbg from '../../Assets/getimaylbg.png';
import android from '../../Assets/Androidimayl.png';
import iphone from '../../Assets/iPhoneimayl.png';
import calllogo from '../../Assets/calllogo.png';
import fb from '../../Assets/fb.png';
import tw from '../../Assets/tw.png';
import gplus from '../../Assets/gplus.png';
import linkedin from '../../Assets/Linkedin.png';
import footer from '../../Assets/footerbg.png';
import yt from '../../Assets/yt.png';
import expresp from '../../Assets/expresp.png';
import handimage from '../../Assets/hand.png'

function Home(prop) {

  const role = prop.rolerefer;

  const handleclickstartfree = () => {
    const url = 'https://cloud.imayl.com/register.html';
    window.open(url, '_blank');
  }

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

  const handleclickgetios = () => {
    const url = 'https://apps.apple.com/in/app/imayl-inc/id1053038611';
    window.open(url, '_blank');
  }

  const handleclickgetandroid = () => {
    const url = 'https://play.google.com/store/apps/details?id=com.imayl&pcampaignid=web_share';
    window.open(url, '_blank');
  }

  const handleclickterms = () => {
    const url = 'https://cloud.imayl.com/termsconditions.html';
    window.open(url, '_blank');
  }

  const handleclickpolicy = () => {
    const url = 'https://cloud.imayl.com/privacy.html';
    window.open(url, '_blank');
  }

  const handleclickimaylinc = () => {
    const url = 'https://imayl.com/';
    window.open(url, '_blank');
  }

  const handleclickreqcall = () => {
    const url = 'https://cloud.imayl.com/requestcall.html';
    window.open(url, '_blank');
  }

  const handlcallclicked=()=>{
    const phoneNumber = '8884642360';
  window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className='imayl_site_main_div'>
      <div className='imayl_site_sub_div_margin_top'>
      </div>
      <div className='enterprices_main_room_div' style={{ backgroundImage: `url(${imayledge})` }}>
        <div>
          <img src={handimage} className='imayledge_hand_img' />
        </div>
        <div className='enterprices_mainroom_text_imayl_div d-flex flex-column'>
          <span>
            <span className='iMayl_Edge_AI_CLR'>iMayl Edge AI </span>ENABLED
          </span>
          <span className='AI-PD_Suite'>Inbound & Outbound Package Delivery Software
            ONE MILLION <span style={{ color: 'red' }}>(1M)</span> SUBSCRIBERS GLOBLLY
          </span>
          <span className='AI-PD_Suite'>#1 Leading AI-PD Suite for Inbound/Outbound is powering change in package delivery process.
          </span>
          <button className='start_free_trial' onClick={handleclickstartfree}>START FREE TRIAL </button>
        </div>
      </div >
      <div className='imayl_experience_main_main_div' ref={role.role1} >
        <div className='imayl_experience_main_sub_div' >
          <div className='imayl_experience_text_holder_div d-flex flex-column'>
            <span>The iMayl Experience</span>
            <span className='Better_than_easy_text'>STREAMLINE INBOUND AND OUTBOUND PACKAGE DELIEVER WITH REAL-TIME TRACKING.</span>
            <div className='iMayl_allows_you_to_improve d-flex flex-column'>
              <span>iMayl allows you to improve visibility and stop wasting time receiving and tracking</span>
              <span> for internal mail packages once a carrier has delivered them to your facility like mailroom / warehouse / stockroom.</span>
            </div>
            <div className='experience_img_holder_div'>
              <img className='experience_img' src={experience} />
              <img className='experience_img_resp' src={expresp} />
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div' ref={role.role2}>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div'>
            <span>Log a Package</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column-reverse flex-md-row'>
            <div className='d-flex flex-column imayl_logopackage_sub_text_div '>
              <span className='carrier_delivers_packages'>CARRIER DELIVERS PACKAGES AND YOU LOG THEM IN WITH</span>
              <span className='carrier_delivers_packages'>PACKAGE SCANNER APP</span>
              <span className='Simply_take_a_picture The_chain_of'>Simply take a picture of the address label and iMayl receives the </span>
              <span className='package_into_the_web The_chain_of'>package into the web based tracking solution.</span>
              <span className='package_into_the_web The_chain_of '>The chain of custody begins.</span>
            </div>
            <div className='logpackage_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={logpackage} />
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_track_a_package_main_main_div' ref={role.role3}>
        <div className='imayl_track_a_package_main_sub_div'>
          <div className='imayl_track_a_package_sub_main_div'>
            <span>Track A Package</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column flex-md-row'>
            <div className='trackpackage_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={trackpackage} />
            </div>
            <div className='d-flex flex-column imayl_logopackage_sub_text_div'>
              <span className='After_taking_the_picture The_chain_of'>After taking the picture you can confirm receiver and add any </span>
              <span className='package_into_the_web The_chain_of'>necessary details about the package. Click save and an on-demand </span>
              <span className='package_into_the_web The_chain_of'>internal package tracking label can be printed and receiver is </span>
              <span className='package_into_the_web The_chain_of'>notified by email of its arrival.</span>
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div' ref={role.role4}>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div'>
            <span>Deliver A Package</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column-reverse flex-md-row'>
            <div className='d-flex flex-column imayl_deliveryopackage_sub_text_div  '>
              {/* <span className='Simply_take_a_picture'>Mailman making delivery to   </span> */}
              <span className='package_into_the_web The_chain_of'>Mailman making delivery to   </span>
              <span className='package_into_the_web The_chain_of'>receiver takes a picture of  </span>
              <span className='package_into_the_web The_chain_of'>The tracking label and can also capture a signature.</span>
              <span className='package_into_the_web The_chain_of'>also capture a signature.</span>
            </div>
            <div className='deliver_package_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={Deliever} />
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div' ref={role.role5}>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div'>
            <span>How It Helps Your Organization</span>
          </div>
          <div className='iMayl_helps_you_improve'>
            <span>iMayl helps you improve visibility and accountability and stop wasting time receiving, dispatching, tracking items coming into and leaving your facilities</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column-reverse flex-md-row'>
            <div className='d-flex flex-column imayl_how_it_help_sub_text_div '>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='ease_of_use'>Ease of Use</span>
                <span className='simplay_take_pic_how_it_help'>Simply take a picture of incoming mail packages even by standard iOS/ Android devices and let iMayl do the rest. </span>
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Activity_Alerts_and_Notifications'>Activity Alerts and Notifications</span>
                <span className='simplay_take_pic_how_it_help'>iMayl notifies receivers when packages are received and out for delivery. </span>
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='End-to-End_chain'>End-to-End Chain of Custody</span>
                <span className='simplay_take_pic_how_it_help'>iMayl records all receiving, tendering, and delivery events so you have complete chain of custody or trail of events.</span>
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Eco-Friendly'>Eco-Friendly</span>
                <span className='simplay_take_pic_how_it_help'>iMayl is eco-friendly by allowing you eliminate the need for paper, paper clutter on your desk and in our landfills.</span>
              </div>
            </div>
            <div className='howit_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={howit} />
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_track_a_package_main_main_div' ref={role.role6} style={{ backgroundImage: `url(${getimaylbg})` }}>
        <div className='imayl_track_a_package_main_sub_div'>
          <div className='Why_there’s_nothing'>
            <span>WHY THERE’S NOTHING QUITE LIKE IMAYL, A STATE-OF-THE ART MAILROOM
              MANAGEMENT SAAS PLATFORM </span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column flex-md-row'>
            <div className='whythere_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={getimayl} />
            </div>
            <div className='d-flex flex-column imayl_logopackage_sub_text_div'>
              <span className='why_there_the_picture'>iMayl fully adapts to your process and doesn't need technical  </span>
              <span className='package_into_the_web'>resources. iMayl’s package logging and tracking software is intuitive </span>
              <span className='package_into_the_web'>and a breeze to customize, so you can focus on business instead of  </span>
              <span className='package_into_the_web'>learning a tool.</span>
              <span className='why_there_the_picture'>Software should be more than a collection of features. That, above all,  </span>
              <span className='package_into_the_web'>a software should be absolutely simple, flexible, and magical to use.</span>
              <button className='btn_get_imayl' style={{ cursor: 'pointer' }} onClick={handleclickreqcall}>Get iMayl</button>
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div '>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div'>
            <span>How It Helps Your Organization</span>
          </div>
          <div className='iMayl_helps_you_improve'>
            <span>can use your existing barcode readers/ scanners as well can use standard iOS/ Android devices</span>
          </div>
          <div className='d-flex flex-column flex-md-row iphone_android_whole_parent'>
            <div className='d-flex flex-column align-items-center mobile_imayl_divs'>
              <img className='android_imayl' src={android} />
              <span className='mobile_type_text'>Android</span>
              <span className='mobile_type_sub_text'>Get the iMayl app for
                Android from the Play
                Store.</span>
              <button className='get_the_app' style={{ cursor: 'pointer' }} onClick={handleclickgetandroid}>Get the app</button>
            </div>
            <div className='d-flex flex-column align-items-center mobile_imayl_divs'>
              <img className='android_imayl' src={iphone} />
              <span className='mobile_type_text'>iPhone</span>
              <span className='mobile_type_sub_text'>Get the iMayl app for
                iPhone from the App Store.</span>
              <button className='get_the_app' style={{ cursor: 'pointer' }} onClick={handleclickgetios}>Get the app</button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer_main_div d-flex flex-column align-items-center justify-content-center' >
        <div className='footer_img_text_holder_sub  d-flex flex-column justify-content-center align-items-center'>
          <img className='calllogo'style={{ cursor: 'pointer' }} onClick={handlcallclicked} src={calllogo} />
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
    </div>
  )
}

export default Home 