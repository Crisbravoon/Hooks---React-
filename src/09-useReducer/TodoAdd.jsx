
import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodos }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (description.length <= 1) return;

        const NewTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        };
        
        onNewTodos(NewTodo);
        onResetForm();
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                className="form-control"
                type="text"
                name="description"
                value={description}
                onChange={onInputChange}
                placeholder='¿Qué hay que hacer?' />
            <button
                type="submit"
                className="btn btn-outline-primary mt-3">
                Agregar
            </button>
        </form>
    )
}
