import React, { Component } from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

//------------------------- CSS -------------------------//

import '../styles.css';

//-------------------------------------------------------//

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <><NavBar /><div className="App-header">Just page Contact</div><Footer /></>
        );
    }
}
 
export default Contact;