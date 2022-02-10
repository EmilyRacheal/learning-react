import React from 'react';


// const person = (props) =>{
//     return <p>Hello I'm {props.name} and I am {props.age} years old!</p>
// }

const person = (props) =>{
    return (
        <div>
            <p>Hello I'm {props.name} and I am {props.age} years old!</p>
            {/* <p>{props.children}</p> */}
        </div>
    )

    

};

export default person;   