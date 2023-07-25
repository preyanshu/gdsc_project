import React from 'react'
import Req from './Req'


const Driverpanel = (props) => {
  
  return (
    <div>
         <div className="right driverpanel container" style={{width:90+"vw",backgroundColor:"cream",height:87+"vh"}} >
                
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
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className='right bc' style={{backgroundColor:"white"}}><Req a="confirmed"></Req></div></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className='right bc'><Req a="confirmed"></Req></div></div>
</div></div>

                </div>
            


      
    </div>
  )
}

export default Driverpanel
