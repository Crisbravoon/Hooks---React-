
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];
       
        case 'Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
       
        case 'Toggle Todo':
            //Regresa un nuevo Arreglo
            return initialState.map(todo => {
            
            //verifica si el id es igual al que se va a cambiar y cambia el done
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        
        default:
            return initialState;
    }
};