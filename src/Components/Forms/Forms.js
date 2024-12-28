import React from 'react'
import './Forms.css';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Forms() {

  const notify = (event) =>{
    event.preventDefault(); // Prevents the default form submission or anchor navigation
    toast("Message sent sucessesfully!");
  } 


  return (
    <>
    

  <div className="contact-form">
    <span className="heading">Contact Me :</span>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" required="" placeholder='Enter your Name ' />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" placeholder='Enter your Email' />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required="" placeholder='Write your Message ' defaultValue={""} />
      <button type="submit" onClick={notify} >Submit</button>
      <ToastContainer />
    </form>
  </div>


</>

  )
}
