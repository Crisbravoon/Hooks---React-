
import React, { useState } from 'react'
import { Small } from './Small'
import { useCounter } from '../hooks/useCounter'

export const Memorize = () => {

    const { counter, increment } = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={increment}>
                +1
            </button>
            
            <button
                className='btn btn-primary'
                onClick={()=> setShow(!show)}>
                Show7Hide {JSON.stringify(show)}
            </button>
        </>
    )
};
