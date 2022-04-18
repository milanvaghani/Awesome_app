import React from "react";
import logo from "./Images/logo.jpg";

const Header = () => {
  return (
    <>
      {/* <div className='bg-warning row clearfix content-heading span4 row paragraphs'>
        <div className='flex-row'><img src={logo} alt='logo' width='70' height='50'/>  <h1>My Keep</h1> </div>
    </div> */}
      {/* 
    <div class="container-fluid bg-warning">
        <div class="row">
            <div class="col-md-1"><img src={logo} alt='logo' width='70' height='50'/>  </div>
            <div class="col-md-2"><h1>My Keep</h1></div>
        </div>
    </div> */}
      <div class="row bg-warning">
        <div class="col-xs-1 col-sm-1 col-md-7 col-centered">
          <div class="maintxt p-lg-2">
            <img src={logo} alt="logo" width="40" height="30" />
            <span class="overlay-text fw-bold ">My Keep</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
