import React from "react";
import './FormDetails.css';

class FormDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render ( ) {
        return (
            <div>

            
            <div className="container">
               
             <form action="/" className="form">
    <label for="card-number">Ration Card Number :</label>
    <input type="number" name="card-number" id="card-number" placeholder="Enter card number" />
    <label for="name"> Name :</label>
    <input type="text" name="name" id="name" placeholder="Enter full name" />
    <label for="age">Age :</label>
    <input type="number" name="age" id="age" placeholder="Enter age" />
    <button id="btn">Submit Details</button>
  </form>
            </div>
            </div>
        )
    }
}
export default FormDetails;