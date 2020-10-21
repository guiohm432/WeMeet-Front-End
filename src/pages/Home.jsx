import React from "react";


const Home = () => {
  
    let homePageBackGround = "../../photos/HomePage.jpg"
    return (
    <React.Fragment>
        <h1>HELLO WEMEET !</h1>
        <div className='background_container'>
            <img src={homePageBackGround} alt="NO IMG"/>
        </div>
      
    </React.Fragment>
    );
};

export default Home;