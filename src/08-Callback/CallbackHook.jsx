
import { ShowIncremente } from './ShowIncremente';
import React, { useCallback ,useState} from 'react';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    //Memoriza funciones , solo cuando algo cambie
    const incrementFathe = useCallback(
        //EL value tomara el valor del increment que se le paso
        ( value ) => {
            //Sabe internamente que va sumar +1
            setCounter(( CounterValue ) => CounterValue + value);
        }, [],
    );

    return (
        <>
            <h1> UseCallback Hook: {counter}</h1>
            <hr />
            <ShowIncremente increment={ incrementFathe } />
        </>
    )
};
