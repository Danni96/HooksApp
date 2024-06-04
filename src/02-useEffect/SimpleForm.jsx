import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            username: 'Balack',
            email: 'balack@gmail.com',
        }
    )

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
           ...formState,
            [name]: value,
        });
    }


    useEffect(() => {

    }, [] );

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

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

        {
            (username === 'Balack2') && <Message /> 
        }
    </>
  )
}
