import React, { Component } from 'react';
// import Dialog from 'react-toolbox/lib/dialog/Dialog';
// import Button from 'react-toolbox/lib/button/Button';
// import PubSub from 'pubsub-js';
import "./styles/card.css";
class Card extends Component {
  render() {
    //Tramento visual dos multiplos de partadepartamentos
    this.departments =
      this.props.departments.length > 1
        ? this.props.departments.map((department) => department + ", ")
        : this.props.departments;

    
    let host = "http://localhost:5000/members/";


   const deleteMember = async (id) => {
    await fetch(`${host}${id}`,{ method: 'DELETE' })
    .then((response) =>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      window.location.reload(); 
    })
    .catch((error) =>{
      console.log(`Erro no ${error}`);
    })

   }

    return (
      <div className="card">
        {" "}
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
        <h4>{this.props.post}</h4>
        <h5>{this.departments}</h5>
        <h6>{this.props.birthday}</h6>
        
        <button onClick={()=>deleteMember(this.props.id)}>deletar</button>
        
      </div>
    );
  }
}

export default Card;
