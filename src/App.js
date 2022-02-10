import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


  const App = props =>{
    const [personsState, setPersonsState] = useState({ 
      persons: [
        {name: 'max', age: 28 },
        {name: 'milly', age: 23 },
        {name: 'vee', age: 15 }
      ],
      otherState: 'some other value'
    });

   const switchNameHandler = () => {
      setPersonsState({ 
    //  ...personsState,
        
        persons: [
        {name: 'maxff', age: 28 },
        {name: 'milly', age: 23 },
        {name: 'veerr', age: 20 }
        ]
      });
    };


    return (
          <div className="App">
            <h2>welcome</h2>
            <p>This is really working</p> 
            <button onClick={switchNameHandler}>Switch Names</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name ={personsState.persons[1].name} age={personsState.persons[1].age} />
            <Person name= {personsState.persons[2].name} age={personsState.persons[2].name}>My Hobbies: Coding, VolleyBalling</Person>
          </div>
        );
    // return React.createElement('div',null, React.createElement('h1', null, 'does this work now?'));
  }

export default App;
 
