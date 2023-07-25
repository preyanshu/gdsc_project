import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Req from './Req';

const Userpanel = () => {
  return (
    <>
        <div className="flex">
           <div className="left flex2" >
           <div className='container px-3'>
            {/* <h1 className='text-center pb-3'>Add Request.</h1> */}
            <form className='form' >
            <div className="mb-3">
                    {/* <label htmlFor="name" className="form-label">Name</label> */}
                    <input type="text" className="form-control"  id="name" name="name" aria-describedby="emailHelp" placeholder='From:' />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Email address</label> */}
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='To:' />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <div className="mx-3 ">
                    {/* <label htmlFor="password" className="form-label text-center">Time</label> */}
                    <input type="time" className="form-control label time"  name="password" id="time" placeholder='Time' minLength={5} required />
                </div>
                <div className="mx-3 ">
                    {/* <label htmlFor="cpassword" className="form-label text-center">Date</label> */}
                    <input type="date" className="form-control label date"  name="cpassword" id="date" minLength={5} required placeholder='Date'/>
                </div>
                </div>
                 <button type="submit" className="btn btn-primary text-center container my-3 submit">Add request..</button>
                
            </form>
        </div>
           </div>
            <div className="right" >
                
                <div className="container"><ul class="nav nav-pills mb-3 container center tabs" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pending</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recieved</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Confirmed</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className='right bc'><Req a="pending"></Req></div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className='right bc'><Req a="confirmed"></Req></div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className='right bc'><Req a="confirmed"></Req></div></div>
</div></div>

                </div>
            
        
        </div>
        
        
      
        </>
  )
}

export default Userpanel
