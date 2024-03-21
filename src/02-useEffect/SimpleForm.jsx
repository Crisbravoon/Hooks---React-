
import { Message } from "./Message";
import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Noxius',
        email: 'cristobalbravon98@gmail.com',
    });

    const { username, email } = formState;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    useEffect(() => {
        // console.log('formState Cambio');
    }, [formState]);



    useEffect(() => {
        // console.log('email Cambio');
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <form>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={onInputChange}
                    required />
                <input
                    className="form-control mt-2 mb-2"
                    type="email"
                    name="email"
                    placeholder="correo@gmail.com"
                    value={email}
                    onChange={onInputChange}
                    required />
            </form>

            {
                (username === 'Noxius') && <Message />
            }
        </>
    )
}
