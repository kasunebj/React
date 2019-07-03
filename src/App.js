import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

state = {
  persons:[{name:"kasun",age:"28"},{name:"eranga",age:"25"},{name:"sahan",age:"23"}],
  showPersons:false
}

switchNamehandler = (newname) => {
this.setState({  persons:[{name:"kasun",age:"28"},{name:newname,age:"25"},{name:"sahan",age:"yes"}]});
}

nameChangedHandler=(event)=>{
  this.setState({  persons:[{name:"kasun",age:"28"},{name:event.target.value,age:"25"},{name:"sahan",age:"yes"}]});

}

deletePersonHandler=(personIndex)=>{
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render(){
  const style = {
    backgroundColor : "white",
    font : "inherit",
    border : "1px solid blue",
    padding : "8px",
    cursor : "pointer"
  }

  let persons = null;
  if (this.state.showPersons){
      persons = (
                  <div>
                    {this.state.persons.map((perosn,index)=>{
                        return <Person
                            click={()=>this.deletePersonHandler(index)}
                            name={perosn.name}
                            age={perosn.age}
                        />
                      })}
                  </div>
                )
               }

  return (
        <div className="App">
              <h1>hi i am a react app</h1>
              <p>this is really working</p>
              <button
              style={style}
              onClick={this.togglePersonsHandler}>Switch Name</button>
              {persons}
        </div>
  );
}

}


export default App;
