import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });


    // const { username, email, password } = formState;

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />
        <div className="form">
            <input 
                type="text" 
                name="username" 
                className="form-control"
                placeholder="Username"
                value={ username}
                onChange={ onInputChange }
            /> 
            <input 
                type="email" 
                name="email" 
                className="form-control mt-2"
                placeholder="email" 
                value={email}
                onChange={ onInputChange }
            /> 
            <input 
                type="password" 
                name="password" 
                className="form-control mt-2"
                placeholder="password" 
                value={password}
                onChange={ onInputChange }
            /> 
            
            <button onClick={ onResetForm } className="btn btn-warning mt-2"> Borrar </button>
        </div>


    </>
  )
}
