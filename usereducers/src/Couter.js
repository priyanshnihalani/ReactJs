import React, {useReducer} from 'react';

function Couter() {
    function reducer(currentState, action){
        
        switch (action.type)
        {
            case "increment":
                return currentState + 1;
                break;
            case "decrement":
                return currentState - 1;
                break;
            default :
                return currentState;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0) 
    function increment(){
        dispatch({ type: 'increment' });
    }
    function decrement() {
        dispatch({ type: 'decrement' });
    }
   
    return (
        <div>
            <button onClick={increment}>++</button>
            <h1>Current Value: {count}</h1>
            <button onClick={decrement}>--</button>
        </div>
    );
}

export default Couter;