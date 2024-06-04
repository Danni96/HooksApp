import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
    inputRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <h1>Focus Screen</h1>
        <br />

        <input
          ref={inputRef}
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
          className="form-control"
        />

        <button onClick={ onClick } className="btn btn-primary mt-2">Focus</button>
      </div>
    </>
  );
};
