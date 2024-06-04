import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: " ",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Que hay que hacer?"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button className="btn btn-success mt-2" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
