import React, { Component } from 'react'

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

//CSS

import "../index.css";
import '../styles.css';


class About extends Component {
    state = {  } 
    render() { 
        return (
            <><NavBar /><div className="App-header">
                Just session about my page
            </div><Footer /></>
        );
    }
}
 
export default About;