

/**
 *   TEORIA DE USO DE REDUCER
 **/


// Las cosas que se van hacer en Reducer son las siguientes:

/**
 * state: Tomara las cosa que tiene que hacer del initialState 
 * y regresa un nuevo estado
 * Action : Es como quiere que camie el estado
**/

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];


const todoReducer = (state = initialState, action) => {
    //Valida si existe la acción y la agrega
    return action?.type 
    ? [...state, ...action.payload] 
    : state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
};

const newTodo3 = {
    id: 3,
    todo: 'Recolectar la piedra del Realidad',
    done: false
};

const newTodo4 = {
    id: 4,
    todo: 'Recolectar la piedra del Tiempo',
    done: false
};

const addTodoAction = {
    //La acción
    type: '[TODO] add todo',
    //Lo que hará la acción
    payload: [newTodo, newTodo3, newTodo4]
};

//Agregnado un nuevo todo al estado
todos = todoReducer(todos,addTodoAction);

console.log(todos);