import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: 'max', age: 28 },
      {name: 'milly', age: 23 },
      {name: 'vee', age: 15 }
    ],
    otherState: 'some other value'
  }

switchNameHandler = () => {
  // console.log('was collected')
  // donot do this megthodthis.state.persons[0].name = 'EmilyRacheal'
  this.setState({
    persons: [
    {name: 'maxff', age: 28 },
    {name: 'milly', age: 23 },
    {name: 'veerr', age: 20 }
    ]
  })
}

  render() {
    return (
          <div className="App">
            <h2>welcome</h2>
            <p>This is really working</p> 
            <button onClick={this.switchNameHandler}>Switch Names</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Coding, VolleyBalling</Person>
            {/* <Person name= "Milly" age="19"> 
              <ul>
                <li>racing</li>
                <li>cooking</li>
              </ul>
            
             </Person> */}
          </div>
        );
    // return React.createElement('div',null, React.createElement('h1', null, 'does this work now?'));
  }
}

export default App;
