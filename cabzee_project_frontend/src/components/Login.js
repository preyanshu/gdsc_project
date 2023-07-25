
// import './App.css';
import React, { useState } from "react";
import { useNavigate ,Router} from "react-router-dom";
import {
  
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  
} from "firebase/auth";
import { auth } from "./firebase";
// import OtpInput from 'react-otp-input';



function Login() {
  

  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [btn, setbtn] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  // const [otp, setOtp] = useState('');
  // const navigate=useNavigate();

 

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "r",
      {"size":"invisible",
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        console.log("hi i am recaptcha");
      },},
      auth
    );
    recaptchaVerifier.render().then((n)=>{
console.log(n)
    }).catch((e)=>{
        console.log(e.message)

    });
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  
  const getOtp = async (e) => {
    
    try {
        setbtn(true);
      e.preventDefault();
      let numberf="+91"+number;
      console.log(numberf)
    
    
      const response = await setUpRecaptha(numberf);
        setResult(response);
        setFlag(true);
        console.log("this is response")
        console.log(response);


        
      
    } catch (error) {
      console.log(error.message)
      
    }
   
   };


  const onChange = (e)=>{
    setNumber(e.target.value)
}
  const onChange2 = (e)=>{
    setOtp(e.target.value)
}
const verifyOtp = async (e) => {
  setbtn2(true);
  e.preventDefault();

  try {
    const c=await result.confirm(otp);
    console.log(c)


    // navigate("/driverpanel");
    alert("signed in")
    
    onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser.accessToken);
      localStorage.setItem("tokencabzee",currentuser.accessToken);
      
      // setUser(currentuser);\
    })

  } catch (err) {
    alert(err.message);
  
};}







  return (<>
  <div id="r"></div>

  
  {(!flag)&&<form style={{width:300+"px"}} className='container' onSubmit={getOtp}>
  <div class="input-group my-3">
  <span class="input-group-text" id="basic-addon1">+ 91</span>
  <input type="text" class="form-control" placeholder="Phone no" aria-label="Username" aria-describedby="basic-addon1" pattern=".{10}" required value={number} onChange={onChange}/>
</div>


 {(!btn)&&<button type="submit" class="btn btn-primary container">send otp </button>} 
 {(btn)&&<button type="submit" class="btn btn-danger container" style={{backgroundColor:"grey",border:2 +"px solid grey"}}> sending...</button>} 
</form>}



  {(flag)&&<form style={{width:300+"px"}} className='container' onSubmit={verifyOtp}>
   <div class="input-group my-3">
  {/* <span class="input-group-text" id="basic-addon1">+ 91</span> */}
  <input type="tel" class="form-control" placeholder="Enter OTP" aria-label="Username" aria-describedby="basic-addon1" pattern=".{6}" required value={otp} onChange={onChange2}/>
</div> 




 {(!btn2)&&<button type="submit" class="btn btn-primary container">verify otp</button>} 
 {(btn2)&&<button type="submit" class="btn btn-danger container" style={{backgroundColor:"grey",border:2 +"px solid grey"}}>signing in</button>} 
</form>}


  


    

  </> );
}

export default Login;
