
import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <div>

            <h1>FocusScreen</h1>
            <hr />
            <input
                className='form-control'
                ref={inputRef}
                type="text"
                placeholder='Ingrese su nombre' />


            <button onClick={onClick} className='btn btn-primary mt-2'>Focus</button>
        </div>
    )
}
console.log(inputRef);
