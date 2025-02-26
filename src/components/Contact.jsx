
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fd9bf87', 'template_nd88bcm', form.current, {
        publicKey: 'R47jtwNXmSEqmj_6N',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container contact-section' data-aos="fade-up" data-aos-duration="2000">
      <h1 style={{textAlign:"center"}} className='contact-title title'>CONTACT ME<span style={{ color: "#08ff88" }}>.</span></h1>

      <div className="contact-me mt-5 ">
        <h6 className='mb-5'>For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email: <span style={{color:"blue"}}
        >jabarsonrichardofficial@gmail.com</span> 

</h6>
        <div className="contact-rest mt-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="contact-left ">
        <h3>Let's <span style={{color:"#08ff88"}}>Connect!</span></h3>
        <p>
          I’d love to hear from you! Feel free to reach out with any questions,
          ideas, or collaborations. I am always open to new projects and
          opportunities. Let’s create something amazing together!
        </p>
           </div>
           <div className="contact-right ">
           <form action="">
          
            <input type="text" name="username" className='form-control mb-3 p-3' placeholder='Enter Your Name' />
            <input type="email" name='useremail' className='form-control mb-3 p-3' placeholder='Enter Your Email id' />
            <input type="text" name='usersubject' className='form-control mb-4 p-3' placeholder='Enter the Subject' />
            <textarea name="usermessage" id="" cols={"50"} rows={5} className='form-control mb-4' placeholder='Enter the Message'></textarea>
            <button className='' onClick={sendEmail}>Send Message</button>
           </form>
           </div>
        </div>
      
      </div>
    </div>
  )
}

export default Contact