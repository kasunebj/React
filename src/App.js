import React,{Component} from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {

state = {
  persons:[{id:"1",name:"kasun",age:"28"},{id:"2",name:"eranga",age:"25"},{id:"3",name:"sahan",age:"23"}],
  showPersons:false
}

switchNamehandler = (newname) => {
this.setState({  persons:[{name:"kasun",age:"28"},{name:newname,age:"25"},{name:"sahan",age:"yes"}]});
}

nameChangedHandler=(event, id)=>{
const personIndex = this.state.persons.findIndex(p=> {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons:persons});

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

  let persons = null;
  let btnClass = null;

  if (this.state.showPersons){
      persons = (
                  <div>
                    {this.state.persons.map((person,index)=>{
                        return <Person
                            click={()=>this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed = {(event)=>this.nameChangedHandler(event, person.id)}
                        />
                      })}
                  </div>
                )
                btnClass = classes.Red;
               }

        const assignedClasses= [];
        if (this.state.persons.length <= 2){
          assignedClasses.push(classes.red);//classes['red']
        }if (this.state.persons.length<= 1){
          assignedClasses.push(classes.bold);//classes['red','bold']
        }

  return (
        <div className={classes.App}>
              <h1>hi i am a react app</h1>
              <p className={assignedClasses.join(' ')}>this is really working</p>
              <button
              className={btnClass}
              onClick={this.togglePersonsHandler}>Switch Name</button>
              {persons}
        </div>
  );
}

}


export default App;
