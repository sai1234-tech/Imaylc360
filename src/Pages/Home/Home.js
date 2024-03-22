import React from 'react'
import './Home.css'
import experience from '../../Assets/experience.png';
import imayledge from '../../Assets/imayledge.png';
import imagewidthtruck from "../../Assets/Imagwithtruck.png"
import logpackage from '../../Assets/logpackage.png';
import trackpackage from '../../Assets/trackpackage.png';
import Deliever from '../../Assets/delieverpackage.png'
import howit from '../../Assets/howit.png';
import getimayl from '../../Assets/getimayl.png';
import PackageReceiving from '../../Assets/PackageReceiving.png'
import getimaylbg from '../../Assets/getimaylbg.png';
import android from '../../Assets/Androidimayl.png';
import iphone from '../../Assets/iPhoneimayl.png';
import calllogo from '../../Assets/calllogo.png';
import fb from '../../Assets/fb.png';
import tw from '../../Assets/tw.png';
// import gplus from '../../Assets/gplus.png';
import linkedin from '../../Assets/Linkedin.png';
import footer from '../../Assets/footerbg.png';
import yt from '../../Assets/yt.png';
import expresp from '../../Assets/expresp.png';
import handimage from '../../Assets/hand.png'
import Footer from '../../Components/Footer/Footer';


function Home(prop) {

  const role = prop.rolerefer;

  const handleclickstartfree = () => {
    const url = 'https://cloud.imayl.com/register.html';
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


  const handleclickreqcall = () => {
    const url = 'https://cloud.imayl.com/requestcall.html';
    window.open(url, '_blank');
  }

  const handlcallclicked = () => {
    const phoneNumber = '8884642360';
    window.location.href = `tel:${phoneNumber}`;
  }

  return (
    <div className='imayl_site_main_div'>
      <div className='imayl_site_sub_div_margin_top'>
      </div>
      <div className='enterprices_main_room_div' style={{ backgroundImage: `url(${imagewidthtruck})` }}>
        <div>
          <img src={handimage} className='imayledge_hand_img' />
        </div>
        <div className='enterprices_mainroom_text_imayl_div d-flex flex-column'>
          <span>
            <span className='iMayl_Edge_AI_CLR'>iMayl Edge AI </span>ENABLED
          </span>
          <span className='AI-PD_Suite'>Inbound & Outbound Package Delivery Software over <br/>
            <b>ONE MILLION</b> <span style={{ color: '#CD1A1A',fontWeight:'800' }}>(1M)</span> SUBSCRIBERS GLOBALLY
          </span>
          <span className='AI-PD_Suite'>
          <span style={{ color: '#CD1A1A',fontWeight:'800'}}> #1 </span>
           Leading AI-PD Suite for powering change in package delivery process.
          </span>
          {/* <button className='start_free_trial' onClick={handleclickstartfree}>GET A DEMO </button> */}
        </div>
        <button className='start_free_trial' onClick={handleclickstartfree}>GET A DEMO </button>

      </div >

      <div className='imayl_experience_main_main_div' ref={role.role1} >
        <div className='imayl_experience_main_sub_div' >
          <div className='imayl_experience_text_holder_div d-flex flex-column'>
            <span>The iMayl Experience</span>
            <span className='Better_than_easy_text'>STREAMLINE INBOUND AND OUTBOUND PACKAGE DELIEVERY WITH REAL-TIME TRACKING.</span>
            <div className='iMayl_allows_you_to_improve d-flex flex-column'>
              <span>IMayl Allows You To Improve Visibility And Stop Wasting Time Receiving </span>
              <span>And Tracking Or Internal Mail Packages Once A Carrier Has Delivered Them To Your Facility Like Mailroom / Warehouse / Stockroom.</span>
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
            <span>LOG A PACKAGE</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column-reverse flex-md-row'>
            <div className='d-flex flex-column imayl_logopackage_sub_text_div ' id="imayl_logopackage_sub_text_div">
           
              {/* <span className='package_into_the_web The_chain_of'>Scan Or Take A Picture Of The Lable On The Box, The </span>
              <span className='package_into_the_web The_chain_of'>Information Is Captured And Notification Is Sent To The</span>
              <span className='package_into_the_web The_chain_of'>Receipient Or Information Is Passed To The Backend System </span> */}

              <span className='package_into_the_web The_chain_of'>
              Scan Or Take A Picture Of The Lable On The Box, The Information Is Captured And Notification Is Sent To The Receipient Or Information Is Passed To The Backend System.
              </span>
              {/* <span className='package_into_the_web The_chain_of'>System</span> */}
              <br/><br/>
              <span className='package_into_the_web The_chain_of '>The Chain Of Custody Begins With A Scan Or A Picture.</span>
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
            <div className='d-flex flex-column imayl_logopackage_sub_text_div' id="imayl_logopackage_sub_text_div_1">
              {/* <span className='After_taking_the_picture The_chain_of'>After taking the picture you can confirm receiver and add any </span>
              <span className='package_into_the_web The_chain_of'>necessary details about the package. Click save and an on-demand </span> */}
              <span className='package_into_the_web The_chain_of' id="package_into_the_web__">Track Your Package With All The Details.Track From  AnyWhere At Anytime</span>
              {/* <span className='package_into_the_web The_chain_of'>AnyWhere At Anytime</span> */}
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
              <span className='package_into_the_web The_chain_of'>Package Will Be Delivered To The   </span>
              <span className='package_into_the_web The_chain_of'>Receipient Or To Warehouse  </span>
              <span className='package_into_the_web The_chain_of'>Location. Any Necessary </span>
              <span className='package_into_the_web The_chain_of'>Information Or Picture Or Signature</span>
              <span className='package_into_the_web The_chain_of'>Is Captured. </span>
            </div>
            <div className='deliver_package_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={Deliever} />
            </div>
          </div>
        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div' id="imayl_log_a_package_main_main_div" ref={role.role5}>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div' id='cds'>
            <span>INBOUND RECEIVING – MAILROOM/WAREHOUSE </span>
             <span>PACKAGE MANAGEMENT SOFTWARE ADVANTAGE</span>
          </div>
          {/* <div className='iMayl_helps_you_improve'>
            <span>iMayl helps you improve visibility and accountability and stop wasting time receiving, dispatching, tracking items coming into and leaving your facilities</span>
          </div> */}
          <div className='text_image_holder_imayl d-flex flex-column-reverse flex-md-row'>
            <div className='d-flex flex-column imayl_how_it_help_sub_text_div '>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='ease_of_use' id="ease_of_use">Centralized Receiving Mailroom/Warehouse</span>
                {/* <span className='simplay_take_pic_how_it_help'>Centralized Receiving Mailroom/Warehouse</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Activity_Alerts_and_Notifications'>Streamline Delivery</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl notifies receivers when packages are received and out for delivery. </span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='End-to-End_chain'>Improved Compliance</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl records all receiving, tendering, and delivery events so you have complete chain of custody or trail of events.</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Eco-Friendly'>Secure your premises</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl is eco-friendly by allowing you eliminate the need for paper, paper clutter on your desk and in our landfills.</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Eco-Friendly_'>Real-time Tracking & Notifications</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl is eco-friendly by allowing you eliminate the need for paper, paper clutter on your desk and in our landfills.</span> */}
              </div>
            </div>
            <div className='howit_main_holder_div'>
              <img className='logpackage_main_holder_div_img' src={howit} />
              {/* <img className='ipad_center_image' src={ipadcenter}/> */}
            </div>
            {/* <div>

            </div> */}
             <div className='d-flex flex-column imayl_how_it_help_sub_text_div '>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='ease_of_use' id="ensure_1">Improve Productivity</span>
                {/* <span className='simplay_take_pic_how_it_help'>Centralized Receiving Mailroom/Warehouse</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Activity_Alerts_and_Notifications'  id="ensure_1">Ensure Accountability</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl notifies receivers when packages are received and out for delivery. </span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='End-to-End_chain'>Receipients are secured</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl records all receiving, tendering, and delivery events so you have complete chain of custody or trail of events.</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Eco-Friendly'>100% Internal Visibility</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl is eco-friendly by allowing you eliminate the need for paper, paper clutter on your desk and in our landfills.</span> */}
              </div>
              <div className='how_it_helps_theory_main_div d-flex flex-column'>
                <span className='Eco-Friendly_'>End to End Chain of Custody</span>
                {/* <span className='simplay_take_pic_how_it_help'>iMayl is eco-friendly by allowing you eliminate the need for paper, paper clutter on your desk and in our landfills.</span> */}
              </div>
            </div>          
          </div>
        </div>
      </div>
      <div className='imayl_track_a_package_main_main_div'
      
      id="imayl_track_a_package_main_main_div" 
      ref={role.role6} 
      // style={{ backgroundImage: `url(${getimaylbg})` }}
      >
        <div className='imayl_track_a_package_main_sub_div'>
          <div className='Why_there’s_nothing'>
            <span>PACKAGE RECEIVING, DELIEVERY AND TRACKING MADE EASY!</span> 
            <br/> 
            <br/>
            <span id="our_solutions">Our solution simplifies the receipt, tracking, and delivery of packages that come into and go out of your organization</span>
          </div>
          <div className='text_image_holder_imayl d-flex flex-column flex-md-row'>
            <div className='whythere_main_holder_div'>
              <img className='package_img' src={PackageReceiving} />
            </div>

            <button className='btn_get_imayl' style={{ cursor: 'pointer' }} onClick={handleclickreqcall}>Get iMayl</button>

            {/* <div className='d-flex flex-column imayl_logopackage_sub_text_div'>
              <span className='why_there_the_picture'>iMayl fully adapts to your process and doesn't need technical  </span>
              <span className='package_into_the_web'>resources. iMayl’s package logging and tracking software is intuitive </span>
              <span className='package_into_the_web'>and a breeze to customize, so you can focus on business instead of  </span>
              <span className='package_into_the_web'>learning a tool.</span>
              <span className='why_there_the_picture'>Software should be more than a collection of features. That, above all,  </span>
              <span className='package_into_the_web'>a software should be absolutely simple, flexible, and magical to use.</span>
              <button className='btn_get_imayl' style={{ cursor: 'pointer' }} onClick={handleclickreqcall}>Get iMayl</button>
            </div> */}
          </div>
          {/* <button className='btn_get_imayl' style={{ cursor: 'pointer' }} onClick={handleclickreqcall}>Get iMayl</button> */}

        </div>
      </div>
      <div className='imayl_log_a_package_main_main_div '>
        <div className='imayl_log_a_package__main_sub_div'>
          <div className='imayl_log_a_package_sub_main_div'>
            <span>IMAYL FOR MOBILE</span>
          </div>
          <div className='iMayl_helps_you_improve'>
            <span>Can Use Your Existing Barcode Readers/ Scanners As Well Can Use Standard IOS/ Android Devices</span>
          </div>
          <div className='d-flex flex-column flex-md-row iphone_android_whole_parent'>
            <div className='d-flex flex-column align-items-center mobile_imayl_divs'>
              <img className='android_imayl' src={android} />
              <span className='mobile_type_text'>Android</span>
              <span className='mobile_type_sub_text'>Get the iMayl app for
                Android from the Play
                Store.</span>
              <button className='get_the_app' style={{ cursor: 'pointer' }} onClick={handleclickgetandroid}>GET THE APP</button>
            </div>
            <div className='d-flex flex-column align-items-center mobile_imayl_divs'>
              <img className='android_imayl' src={iphone} />
              <span className='mobile_type_text'>iPhone</span>
              <span className='mobile_type_sub_text'>Get the iMayl app for
                iPhone from the App Store.</span>
              <button className='get_the_app' style={{ cursor: 'pointer' }} onClick={handleclickgetios}>GET THE APP</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home 