
import { useTodos } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const {
        todos,
        HandleNewTodos,
        HandleToggleTodos,
        HandleDeleteTodos,
    } = useTodos();

    return (
        <>
            <h1> Todo App: (10) - <small> Pendientes:2 </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={HandleDeleteTodos}
                        onToggleTodo={HandleToggleTodos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodos={HandleNewTodos} />
                </div>
                <hr className='mt-3' />
            </div>
        </>
    )
};

