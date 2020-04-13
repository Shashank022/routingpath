import React, { Component } from 'react';
import { connect } from 'react-redux'

class  Contact extends Component{
    //const { contacts } = this.props;
    render(){
        console.log(this.props);
        const contactList = this.props.contacts.length ? (
        this.props.contacts.map(contact => {
            return (
                <div className="post card sm-flex" key={contact.id}>
                    <div className="card-content left">
                        <span className="card-body left">{contact.FirstName}</span>
                        <span className="card-body left">{contact.LastName}</span>
                        <p>{contact.Address}</p>
                        <p>{contact.Phone}</p>
                    </div>
                </div>
            ) 
        }))
        :(
            <div className="center"> No Posts yet.!!!</div>
                )
        return(
            <div className="container home">
                    <h4 className="center"> All Contacts</h4>
                    {contactList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
        return {
            contacts : state.contacts
        };
}

export default connect(mapStateToProps)(Contact);