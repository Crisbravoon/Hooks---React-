import { useCounter } from "../hooks/useCounter.js"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    
    return (
        <>
            <h1>Counter With Hooks: {counter}  </h1>
            <hr />
            <button onClick={increment} type="button" className="btn btn-primary" >+1</button>
            <button onClick={reset} type="button" className="btn btn-danger">Reset</button>
            <button onClick={decrement} type="button" className="btn btn-warning">-1</button>

        </>
    )
}
