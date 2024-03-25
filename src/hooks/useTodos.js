
import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";


// Guardamos los todos en el localStorage
const init = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos ? JSON.parse(storedTodos) : [];
};

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const HandleNewTodos = (todo) => {
        //Se crea la acción
        const action = {
            type: 'Add Todo',
            payload: todo
        };
        //Mandara la acción 
        dispatch(action);
    };

    const HandleDeleteTodos = (id) => {
        console.log(id)

        const action = {
            type: 'Remove Todo',
            payload: id
        };
        dispatch(action);
    };

    const HandleToggleTodos = (id) => {
        console.log({ id })
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    };

    return {
        todos,
        HandleNewTodos,
        HandleDeleteTodos,
        HandleToggleTodos
    }
};

