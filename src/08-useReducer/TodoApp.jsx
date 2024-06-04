import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

  return (
    <>
      <div className="container mt-2">
        <h1>
          Todo app { todosCount } <small> Pendientes: { pendingTodosCount } </small>{" "}
        </h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </div>
          <div className="col-5">
            <h4>Agregar todo</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </>
  );
};
