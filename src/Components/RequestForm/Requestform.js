import React from 'react'
import '../RequestForm/Requestform.css'
function Requestform() {
    return (
        <div className='request_demo_form_main_div d-flex flex-column align-items-center '>
            <span className='yes_iwant_request_demo'>Yes, I want a demo!</span>
            <div className='yes_iwant_request_demo_form_holder d-flex flex-column'>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>Company Name</label>
                    <input className='input_form_request_call' placeholder='Company Name' autoFocus />
                </div>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>First Name</label>
                    <input className='input_form_request_call' placeholder='First Name' />
                </div>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>Last Name</label>
                    <input className='input_form_request_call' placeholder='Last Name' />
                </div>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>Job Title</label>
                    <input className='input_form_request_call' placeholder='Job Title' />
                </div>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>Email</label>
                    <input className='input_form_request_call' placeholder='Email' />
                </div>
                <div className=' d-flex flex-column align-items-start'>
                    <label className='input_form_request_call_label'>Phone Number</label>
                    <input className='input_form_request_call'placeholder='Phone Number' />
                </div>
            </div>
            <button className='scheduleDemo_btn'>Schedule a Demo</button>

        </div>
    )
}

export default Requestform