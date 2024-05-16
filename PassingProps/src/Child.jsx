import React from 'react';
import GrandChild from './GrandChild';
function Child(props) {
    return (
        <div>
            <h1>Child Component</h1>
            <p>{props.message}</p>
            <GrandChild message={props.message}/>
        </div>
    );
}

export default Child;