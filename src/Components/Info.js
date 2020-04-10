import React from 'react';
import { connect } from 'react-redux'

const Info  = () =>{
    return(
        <div className="container">
            <h4 className="center">Information Page</h4>
            <p className="right">Airplanes are fixed-wing aircraft that are propelled through the air by engines.
            They are used for transportation, recreation, research and military purposes.
            Engines provide the thrust needed to move a plane forward, overcoming drag and allowing the wings to create lift.
            Aircraft wings feature a shape called an airfoil which is designed to create lift as the plane moves through the air.
            The long, thin body of an aircraft is typically called the fuselage.
            Pilots usually control the plane from a cockpit located at the front of the fuselage.</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
            
    }
}



export default connect(mapStateToProps)(Info);