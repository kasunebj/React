import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
  person:[{name:"kasun",age:"28"},{name:"eranga",age:"25"},{name:"sahan",age:"23"}]
}

render(){

  return (
    <div className="App">
      <h1>hi i am a react app</h1>
      <p>this is really working</p>
      <button>Switch Name</button>
      <Person name ={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name ={this.state.person[1].name} age={this.state.person[1].age}>My hobbies : wrestling </Person>
      <Person name ={this.state.person[2].name} age ={this.state.person[2].age}/>

    </div>
  );
}

}


export default App;
