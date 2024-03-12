import React from 'react'
import './style.css';

function MyComponent(props){
    return <p> {props.name}</p>
}
<MyComponent name="Jeff" />

function MyComponent{{name}}{
    return <P>{name}</P>
}
<MyComponent name ={'JeffD'+ 23} />

// Conditional rendering
function Conditional ({count}){
    if(count >5){
        return <h1>Count is greater than 5</h1>;
    } else{
        return <h1>Count is less than 5</h1>;
    }
}

//Ternary Operator
{ count % 2 ===0 ? <h1>Count is even</h1> : <h1>Count is odd</h1>}

//Logical And
{count && 2 ===0 ? <h1>Count is even</h1>}