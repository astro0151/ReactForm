import React, { Component } from "react";
import FormDetails from './FormDetails';

const Home = () =>{
    
    return (
        <div className="container">
            <div  className="btn">
            {/* <a href="E:\react-projects\sundram-app/src/FormDetails.jsx">Add Ration Card Details</a> */}
            {/* <button id="btn" onClick={details}>Submit Details</button> */}
            <FormDetails />
            </div>
        </div>
    )
}
export default Home;