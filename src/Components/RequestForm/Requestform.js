// import React, { useEffect, useRef, useState } from 'react';
// import '../RequestForm/Requestform.css';
// import emailjs from '@emailjs/browser';
// import { useLocation } from 'react-router-dom';

// function Requestform() {
//     const form = useRef(null);
//     const location = useLocation();
//     const isDisabled = location.pathname === '/requestdemo';
//     const rout = isDisabled ? 'Demo Request' : 'Call Request';
//     const [value, setValue] = useState('');

//     useEffect(() => {

//     }, []);

//     const sendEmail = (e) => {
//         e.preventDefault();
//         const toEmails = ['info@imayl.com', 'gopi.raj@imayl.com', 'Kumar@imayl.com', 'abhi@imayl.com'];
//         toEmails.forEach((toEmail) => {
//             form.current['to_email'].value = toEmail;
//             form.current['to_request'].value = rout;
//             emailjs
//                 .sendForm('service_5ela0yb', 'template_hnz3462', form.current, {
//                     publicKey: 'vov_Ep_wMeYZ1P9U8',
//                 })
//                 .then(
//                     () => {
//                         alert(`SUCCESS! Email sent`);
//                     },
//                     (error) => {
//                         alert(`FAILED to send email  `);
//                     },
//                 );
//         });
//     };

//     const handleInputChangemobile = (event) => {
//         const numericValue = event.target.value.replace(/[^0-9]/g, '');
//         setValue(numericValue);
//     };

//     const [emaildata, setEmaildata] = useState(null)

//     const handlechangeemail = (e) => {
//         const email = e.target.value;
//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (emailRegex.test(email)) {
//             setEmaildata(email);
//         } else {
//             setEmaildata(null);
//         }
//     }

//     return (
//         <div className='request_demo_form_main_div d-flex flex-column align-items-center '>
//             <span className='yes_iwant_request_demo'>Yes, I want a demo!</span>
//             <form ref={form} onSubmit={sendEmail}>
//                 <div className='yes_iwant_request_demo_form_holder d-flex flex-column'>
//                     <div className=' d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label'>Company Name</label>
//                         <input type='text' className='input_form_request_call' name='company_name' placeholder='Company Name' autoFocus />
//                     </div>
//                     <div className=' d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label'>First Name</label>
//                         <input type='text' className='input_form_request_call' name='first_name' placeholder='First Name' />
//                     </div>
//                     <div className=' d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label'>Last Name</label>
//                         <input type='text' className='input_form_request_call' name='last_name' placeholder='Last Name' />
//                     </div>
//                     <div className='d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label'>Job Title</label>
//                         <input type='text' className='input_form_request_call' name='job_title' placeholder='Job Title' />
//                     </div>
//                     <div className=' d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label'>Email</label>
//                         <input onChange={handlechangeemail} type='email' className='input_form_request_call' name='email' placeholder='Email' />

//                         <input style={{ display: 'none' }} className='input_form_request_call' name='to_email' placeholder='Email' />
//                         <input style={{ display: 'none' }} className='input_form_request_call' name='to_request' />
//                     </div>
//                     <div className=' d-flex flex-column align-items-start'>
//                         <label className='input_form_request_call_label' name='mobile'>Phone Number</label>
//                         <input
//                             type='text'
//                             className='input_form_request_call'
//                             name='mobile'
//                             placeholder='Phone Number'
//                             value={value}
//                             onChange={handleInputChangemobile}
//                         />
//                     </div>
//                     <button style={{ opacity: emaildata ? 1 : 0.5 }} disabled={emaildata ? false : true} type="submit" className='scheduleDemo_btn' >
//                         {isDisabled ? 'Schedule a Demo' : 'Requeest a call'}
//                     </button>
//                 </div>
//             </form>
//         </div >
//     );
// }

// export default Requestform;


import React, { useEffect, useRef, useState } from 'react';
import '../RequestForm/Requestform.css';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';

function Requestform() {
    const form = useRef(null);
    const location = useLocation();
    const isDisabled = location.pathname === '/requestdemo';
    const rout = isDisabled ? 'Demo Request' : 'Call Request';
    const [value, setValue] = useState('');

    useEffect(() => {

    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        const toEmails = ['mandavenkatakotaiah@gmail.com'];
        toEmails.forEach((toEmail) => {
            form.current['to_email'].value = toEmail;
            form.current['to_request'].value = rout;
            emailjs
                .sendForm('service_5i1z6tz', 'template_l71uv1e', form.current, {
                    publicKey: 'a2RHI1tH0TmL_DcEI',
                })
                .then(
                    () => {
                        alert(`SUCCESS! Email sent`);
                    },
                    (error) => {
                        alert(`FAILED to send email`);
                    },
                );
        });
    };

    const handleInputChangemobile = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(numericValue);
    };

    const [emaildata, setEmaildata] = useState(null);

    const handlechangeemail = (e) => {
        const email = e.target.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            setEmaildata(email);
        } else {
            setEmaildata(null);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const formElements = form.current.elements;
            const currentElement = e.target;
            const currentIndex = Array.from(formElements).indexOf(currentElement);

            if (currentIndex < formElements.length - 1) {
                formElements[currentIndex + 1].focus();
            } else {
                // Submit the form when Enter is pressed on the last field
                sendEmail(e);
            }
        } else if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const formElements = form.current.elements;
            const currentElement = e.target;
            const currentIndex = Array.from(formElements).indexOf(currentElement);

            let nextIndex;

            if (e.key === 'ArrowDown' && currentIndex < formElements.length - 1) {
                nextIndex = currentIndex + 1;
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                nextIndex = currentIndex - 1;
            }

            if (nextIndex !== undefined) {
                formElements[nextIndex].focus();
            }
        }
    };

    return (
        <div className='request_demo_form_main_div d-flex flex-column align-items-center '>
            <span className='yes_iwant_request_demo'>Yes, I want a demo!</span>
            <form ref={form} onSubmit={sendEmail} onKeyDown={handleKeyDown}>
                <div className='yes_iwant_request_demo_form_holder d-flex flex-column'>
                    <div className=' d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label'>Company Name</label>
                        <input type='text' className='input_form_request_call' name='company_name' placeholder='Company Name' autoFocus />
                    </div>
                    <div className=' d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label'>First Name</label>
                        <input type='text' className='input_form_request_call' name='first_name' placeholder='First Name' />
                    </div>
                    <div className=' d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label'>Last Name</label>
                        <input type='text' className='input_form_request_call' name='last_name' placeholder='Last Name' />
                    </div>
                    <div className='d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label'>Job Title</label>
                        <input type='text' className='input_form_request_call' name='job_title' placeholder='Job Title' />
                    </div>
                    <div className=' d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label'>Email</label>
                        <input onChange={handlechangeemail} type='email' className='input_form_request_call' name='email' placeholder='Email' />


                    </div>
                    <div className=' d-flex flex-column align-items-start'>
                        <label className='input_form_request_call_label' name='mobile'>Phone Number</label>
                        <input
                            type='text'
                            className='input_form_request_call'
                            name='mobile'
                            placeholder='Phone Number'
                            value={value}
                            onChange={handleInputChangemobile}
                        />
                    </div>
                    <button style={{ opacity: emaildata ? 1 : 0.5 }} disabled={emaildata ? false : true} type="submit" className='scheduleDemo_btn' >
                        {isDisabled ? 'Schedule a Demo' : 'Request a call'}
                    </button>
                    <input style={{ display: 'none' }} className='input_form_request_call' name='to_email' placeholder='Email' />
                    <input style={{ display: 'none' }} className='input_form_request_call' name='to_request' />
                </div>
            </form>
        </div>
    );
}

export default Requestform;



//  <p>Dear IMAYL Team;</p>
// <p>This is to inform you that, Mr/Mrs {{first_name}} {{last_name}} registered a new: {{company_name}} for IMAYL and the following is contact information</p>
// <div style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; display: flex; flex-direction: column;">
//     <span>NAME:{{first_name}} {{last_name}},</span>
//     <span>JOBTITLE:{{job_title}}</span>
//     <span>EMAIL:{{email}},</span>
//     <span>MOBILE:{{mobile}},</span>
// </div>
// <span>Regards</span>
// <span>customer support</span>


{/* <span>IMAYL</span> 
<p>Dear IMAYL Team;</p>
<p>This is to inform you that, Mr/Mrs {{first_name}} {{last_name}} registered a new: {{company_name}} for IMAYL and the following is contact information</p>
<div style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic; display: flex; flex-direction: column;">
    <span>NAME:{{first_name}} {{last_name}},</span>
    <span>Description:{{job_title}}</span>
    <span>EMAIL:{{email}},</span>
    <span>MOBILE:{{mobile}},</span>
</div>
<span>Regards</span>
<span>customer support</span> */}