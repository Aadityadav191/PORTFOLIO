import React from 'react'
import './Contact.css';
import Forms from '../../Components/Forms/Forms';
import Massege from '../../Assets/Massege.svg';


export default function Contact() {
  return (
    <>
    <div className='contactpage'>
      <h1 align='center' className='ContHeader'> <u>Contact</u>  </h1>
       
       <div className='container'>
          
            
          <div> 
          <img src={Massege} alt="Message Icon" className='contactimage' />
          </div>  

          <div>
            <Forms/>
          </div>


       </div>

   </div>
    </>
  )
}
