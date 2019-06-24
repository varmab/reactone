import React, {useState, useEffect} from 'react'

const Counter=(props)=>{
    var [count, setCount]=useState(props.count);
    var [todos, setTodos]=useState([]);
    
    var increment=()=>{
        setCount(count+1)
    }

    var decrement=()=>{
        setCount(count-1)
    }

    useEffect(()=>{
        setCount(props.count)
        console.log("something got changed")
    })

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;