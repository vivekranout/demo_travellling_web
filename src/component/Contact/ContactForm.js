import React, { useState } from 'react'
import  './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
const ContactForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) =>{
       e.preventDefault()
        const newValue ={ fname, lname, phone, email, subject, company, message }
        setAllValue([...allValue, newValue])

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setCompany("")
        setMessage("")
    }
  return (
    <>
      <section className='contact mtop styled'>
        <div className='container flex styledd'>
            <div className='main-content styleddd'>
                

                <form className='formss' onSubmit={formSubmit}>
                <h2>Contact Form</h2>
                <p>Fill out the form below, we will get back you soon.</p>
                    <div className='grid1'>
                        <div className='input'>
                            <span>
                                First Name <label>*</label>
                            </span>
                            <input type='text' name='fname'  value={fname} onChange={(e) => setFname(e.target.value)}required />
                        </div>
                        <div className='input'>
                            <span>
                                Last Name <label>*</label>
                            </span>
                            <input type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value) }required />
                        </div>
                        <div className='input'>
                            <span>
                                Phone Number <label>*</label>
                            </span>
                            <input type='text' name='lname' value={phone} onChange={(e) => setPhone(e.target.value) }required />
                        </div>
                        <div className='input'>
                            <span>
                                Email <label>*</label>
                            </span>
                            <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value) }required />
                        </div>
                        <div className='input'>
                            <span>
                                Subject <label>*</label>
                            </span>
                            <input type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value) }required />
                        </div>
                        <div className='input'>
                            <span>
                                Company <label>*</label>
                            </span>
                            <input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value) }required />
                        </div>
                        </div>
                        <div className='input inputlast'>
                            <span>
                               Write Your Message <label>*</label>
                               <textarea name='message' value={message} cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}required></textarea>
                            </span>
                          
                        </div>
                    
                    <button className='primary-btn'>Submit Now</button>
                </form>
            </div>

            <div className='side-content'>
                <h3>Visit our location</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus eius nisi deleniti voluptatibus minus nostrum deserunt fugiat provident reprehenderit ullam quod veniam, tenetur accusantium quia itaque est magnam culpa rerum commodi doloribus repellat.</p>
                <br />
                <h3>Message Us</h3>
                <span>info@example.com</span>
                <br />
                <span>+012 456 7898</span>
                <br />

                <div className='icon'>
                   <h3>Follow Us</h3>
                   <div className='flex_space'>
                       <i className='fab fa-facebook-f'>< FacebookIcon/></i>
                       <i className='fab fa-twitter'><TwitterIcon /></i>
                       <i className='fab fa-Lindedin'>< LinkedInIcon /></i>
                       <i className='fab fa-instagram'><InstagramIcon/></i>
                       <i className='fab fa-pinterest'><PinterestIcon/></i>
                       <i className='fab fa-youtube'><YouTubeIcon/></i>
                    </div> 
                </div>
            </div>
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((currentValue) =>{
             const {fname, lname, phone, email, subject, company, message} = currentValue
             return(

          
         <div className='sign-box'>
            <h1>Submit Successfully </h1>
          
         </div>
            )
        })}
      </section>
    </>
  )
}

export default ContactForm
