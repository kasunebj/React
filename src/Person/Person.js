import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

const style = {
  '@media (min-width: 500)':{
    width:'450px'
  }
}

  return (
    <div className = "Person">
    <p onClick={props.click}>I am {props.name} and i am {props.age} years old</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed}/>
    </div>
  );
}
export default Radium(person);
