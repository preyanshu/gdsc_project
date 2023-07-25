import React from 'react'
// import {useEffect} from 'react'
import Navbar from './Navbar'
import Ottie from './Ottie'
import jwt_decode from 'jwt-decode'
import  {  useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Login from './Login'
let a=[];


const Home = () => {
    let navigate = useNavigate();
    const ref = useRef(null)
    const refClose = useRef(null)
   function handleCallbackResponse(response){
    // console.log(response)
    console.log(jwt_decode(response.credential))
    localStorage.setItem("token",response.credential)
    navigate("/userpanel")
   

   }
  
   
   const callback1 = ()=>{
    console.log("handle click 2")
    console.log(jwt_decode(a))
    
    
   
}
   const callback2 = ()=>{
    ref.current.click();
    console.log("callback2")



    
    
    
   
}



    useEffect(()=>{
        /*global google*/

        google.accounts.id.initialize({
            client_id : "560858258237-t17i1a7mmlec7khgm0lk91longis07qb.apps.googleusercontent.com",
            callback : handleCallbackResponse



        })
       

        google.accounts.id.renderButton(
            document.getElementById("a"),
            {size:"medium",text:"signin",shape: "rectangular",logo_alignment: "left",width: `${(window.screen.width)<=406?240:270}`}
        )
        },[])
    
  return (
    <>
    {/* <><img src="cabs1-11@3x.png" alt="image loading .."/> */}
    <div className="text">
        
        <div className="flex container ">
            <div className="del pl-3 mx-3"><h1>YOUR DESTINATION, OUR DEDICATION.</h1></div>
            <img src="logo2-24@2x.png" alt="lol" />
        </div>
    </div>
    
    {/* <div className="image" style={{backgroundImage:url("cabs1-11@3x.png")}}></div> */}
    <div className="page2 flex2">

    <div class="next d-flex">
        <div className="content" style={{color:"white",minWidth:260+"px",width:50+"vw",marginTop:"30px",marginLeft:10+"px"}}>
            <h4>
            Introducing CABZEE in NIT Hamirpur ,
a taxi booking platform that aims to transform the way you travel. Our mission is to provide a seamless and hassle-free transportation experience by connecting passengers with reliable, professional drivers at the tap
of a button.

            </h4>
           
            </div>
            <div>
        <Ottie style={{backgroundColor:"blue",height:300+"px",width:300+"px",marginTop:0+"px"}}></Ottie>
       
        
            </div>
    </div>
   <div className='text-left margin' style={{color:"white"}}>{/* <div>  <button id="a" type='button' ref={ref} backgroundColor="none" class="mx-3"></button> */}
    <span className='mx-3 my-3 ' style={{color:"white",fontSize:"larger"}}>Sign in as a user..</span>
    <div className="py-3  ex" id="a" type='button' ref={ref} backgroundColor="none" class="mx-3"></div></div>
   
   <div className='text-left margin ' style={{color:"white"}}>{/* <div>  <button id="a" type='button' ref={ref} backgroundColor="none" class="mx-3"></button> */}
    <span className='mx-3 d-block text-left ' style={{color:"white",fontSize:"larger"}}>Sign in as a driver..</span>


    <div className=" btn btn-primary mx-3 " type='button' style={{height:37+"px"}} onClick={callback2} id='driverbtn' ><span >Sign in </span></div></div>

           
    
    </div>
    <div className="page3 text-center d-flex">
        <div>Make every mile count.<br/>

drive with us and fuel your success.</div>
    

    </div>



    {/* //modal */}

    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{color:'black'}}>
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title" id="exampleModalLabel">Sign in with your phone number</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{paddingTop:0+"px"}}>
                            <Login></Login>
                           
                        </div>
                        <div className="modal-footer">
                       < button ref={refClose} type="button" className="btn btn-secondary" style={{display:"none"}} data-bs-dismiss="modal">Close</button>
                       <div className="text1 mx-3">Don,t have an account? <a href='/signup'>Sign up</a></div>
                            {/* <button type="button" className="btn btn-primary" onClick={close}>Update Note</button> */}
                        </div>
                    </div>
                </div>
            </div>





    
    
    
    
    
    
    
    </>
     
      

  )
}

export default Home
