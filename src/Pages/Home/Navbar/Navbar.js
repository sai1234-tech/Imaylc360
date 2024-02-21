import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import imayllogo from '../../../Assets/imayllogo.png';
import toggle from '../../../Assets/toggle.png';
import { useNavigate } from 'react-router-dom'

function Navbar({ scrollToRole }) {

    const handleclickContactus = () => {
        window.location.href = 'https://cloud.imayl.com/contactus.html';
    }
    const handleclickLogin = () => {
        window.location.href = 'https://cloud.imayl.com/login.html';
    }

    const handleclicksignup = () => {
        window.location.href = 'https://cloud.imayl.com/register.html';
    }

    const handleclickblog = () => {
        window.location.href = 'https://cloud.imayl.com/blog/blog.html';
    }

    const handleclickDemo = () => {
        window.location.href = 'https://cloud.imayl.com/requestdemo.html';
    }

    const handleclickedImayl = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [togglebar, setTogglebar] = useState(false)
    const handleclickedtoggle = () => {
        setTogglebar(!togglebar)
    }
    return (
        <div className='navbar_main_div'>
            <div className='navbar_sub_main_div d-flex align-items-center'>
                <img className='imayllogo_navbar_toggle' src={toggle} onClick={handleclickedtoggle} />
                <img className='imayllogo_navbar' src={imayllogo} onClick={handleclickedImayl} />
                <div class='imayl_nav_bar_buttons_holder'>
                    <div className='d-flex'>
                        <button className='contact_us_main_div_button' onClick={handleclickContactus}>
                            CONTACT US
                        </button>
                        <button className='login_nav_main_div_button' onClick={handleclickLogin}>
                            LOG IN
                        </button>
                        <button className='signup_nav_main_div_button' onClick={handleclicksignup}>
                            SIGN UP
                        </button>
                        <button className='blog_nav_main_div_button' onClick={handleclickblog}>
                            BLOG
                        </button>
                        <button className='request_demo_nav_main_div_button' onClick={handleclickDemo}>
                            Request A Demo
                        </button>
                    </div>
                </div>

            </div>
            {togglebar ?
                <div class='imayl_nav_bar_buttons_div_holder '>
                    <button className='contact_us_main_div_button' onClick={handleclickContactus}>
                        CONTACT US
                    </button>
                    <button className='login_nav_main_div_button' onClick={handleclickLogin}>
                        LOG IN
                    </button>
                    <button className='signup_nav_main_div_button' onClick={handleclicksignup}>
                        SIGN UP
                    </button>
                    <button className='blog_nav_main_div_button' onClick={handleclickblog}>
                        BLOG
                    </button>
                    <button className='request_demo_nav_main_div_button' onClick={handleclickDemo}>
                        Request A Demo
                    </button>
                </div> : null
            }
            {
                togglebar ? null :
                    <div className='navbar_sub_div_under_nav d-flex align-items-center'>
                        <div className='imayl_sub_nav_text_button_holder d-flex'>
                            <div onClick={() => scrollToRole('role1')} className='imayl_sub_nav_text_button'>
                                IMAYL EXPERIENCE
                            </div>
                            <div onClick={() => scrollToRole('role2')} className='imayl_sub_nav_text_button'>
                                LOG
                            </div>
                            <div onClick={() => scrollToRole('role3')} className='imayl_sub_nav_text_button'>
                                TRACK
                            </div>
                            <div onClick={() => scrollToRole('role4')} className='imayl_sub_nav_text_button'>
                                DELIEVER
                            </div>
                            <div onClick={() => scrollToRole('role5')} className='imayl_sub_nav_text_button'>
                                OUR FEATURES
                            </div>
                            <div onClick={() => scrollToRole('role6')} className='imayl_sub_nav_text_button'>
                                MAILROOM
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Navbar