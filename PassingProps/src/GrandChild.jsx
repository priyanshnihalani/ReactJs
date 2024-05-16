import React from 'react';

function GrandChild(props) {
    return (
        <div>
            <h1>GrandChild</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default GrandChild;