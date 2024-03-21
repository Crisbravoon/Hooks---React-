
import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;


    return (
        <>
            <h1>Formulario Con Hooks</h1>
            <hr />

            <form>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={onInputChange}
                    />

                <input
                    className="form-control mt-2 mb-2"
                    type="email"
                    name="email"
                    placeholder="correo@gmail.com"
                    value={email}
                    onChange={onInputChange}
                    />

                <input
                    className="form-control mt-2 mb-2"
                    type="password"
                    name="password"
                    placeholder="*******"
                    value={password}
                    onChange={onInputChange}
                    />

                <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
                <button
                    onClick={onResetForm}
                    type="submit"
                    className="btn btn-warning">
                    Borrar
                </button>
            </form>
        </>
    )
}
