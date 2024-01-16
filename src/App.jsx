import {IoSettingsOutline, IoDocumentsOutline, IoPersonCircleSharp } from "react-icons/io5";
import {MdLogout, MdOutlinePayments } from "react-icons/md";
import {FaBell, FaYoutube, FaLock,FaDiscord } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import './App.css'

function App() {

  
  return (
    
    <>
    <div className="single-page">
      <div className="navigation-bar">
      <img src="./logo.jpg" className="logo" alt="logo" /> 
      <div className="nav-right-buttons">

      
      <FaBell size={25} className="icons"  color="white"/>
      <IoSettingsOutline className="icons"  size={25} color="white"/>
      <IoPersonCircleSharp className="icons"  size={25} color="white"/> </div>
      </div>

    <div className="inside-single-page">

    <div className="sidebar">
    <IoPersonCircleSharp className="icons" size={25} color="white"/>
    <MdOutlinePayments className="icons" size={25} color="white" />
    <FaYoutube className="icons" size={25} color="white"/>
    <IoDocumentsOutline className="icons" size={25} color="white"/>
    <MdLogout className="icons" size={25} color="white" />
    


    </div>
      <form className="" id="">
          <div
            className="grid-form"
           
          >
            <div>
            <h4>Name </h4>
           
            <input type="text" placeholder="Full Name" /> </div>
            <div>
            <h4> Email</h4>
            <input type="email" placeholder="Email Address" />
            </div>
           
           <div>
           <h4>Billing Address</h4>
           <input type="number" placeholder="Contact number" />
           </div>
           <div>
           <h4>Employer</h4>
           <input type="text" placeholder="Contact number" />
           </div>
           <div>
           <h4>Job Function</h4>
           <input type="text" placeholder="Contact number" />
           </div>
           
          </div>
          
          
          <br />
          <div className="button-together">

          <button className="discord-button">
          <FaDiscord size={25}/>
            Connect with Discord
          </button>

          <button
            
            className="submit-btn"
            type="submit"
          >
           Save <AiOutlineArrowRight size={20} />
          </button>
          </div>
          <div className="form-last">
           <center> <h6>
              <FaLock size={18}/>
             The following roles will be assigned you in the discord
            </h6></center>
           
          </div>
        </form>
        </div>
        </div>
    </>
  )
}

export default App
