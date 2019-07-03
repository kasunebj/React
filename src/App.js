import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

state = {
  person:[{name:"kasun",age:"28"},{name:"eranga",age:"25"},{name:"sahan",age:"23"}]
}

switchNamehandler = (newname) => {
this.setState({  person:[{name:"kasun",age:"28"},{name:newname,age:"25"},{name:"sahan",age:"yes"}]});
}

nameChangedHandler=(event)=>{
  this.setState({  person:[{name:"kasun",age:"28"},{name:event.target.value,age:"25"},{name:"sahan",age:"yes"}]});

}

render(){
  const style = {
    backgroundColor : "white",
    font : "inherit",
    border : "1px solid blue",
    padding : "8px",
    cursor : "pointer"
  }

  return (
    <div className="App">
      <h1>hi i am a react app</h1>
      <p>this is really working</p>
      <button
      style={style}
      onClick={()=>this.switchNamehandler('maximilian')}>Switch Name</button>

      <Person
      name ={this.state.person[0].name}
      age={this.state.person[0].age}
      />

      <Person
      name ={this.state.person[1].name}
      age={this.state.person[1].age}
      click ={this.switchNamehandler.bind(this,"maxi123")}
      changed={this.nameChangedHandler}>My hobbies : wrestling </Person>

      <Person
      name ={this.state.person[2].name}
      age ={this.state.person[2].age}/>

    </div>
  );
}

}


export default App;
