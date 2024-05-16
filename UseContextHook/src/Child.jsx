import React from 'react';
import { useContext } from 'react';
import { UserContext } from './Context.js';
function Child() {
    const {message} = useContext(UserContext)
    return (
        <div>
            <h1>{message}</h1>
        </div>
        // console.log(message)
    );
}

export default Child;