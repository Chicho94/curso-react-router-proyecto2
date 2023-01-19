import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;
  let TodoValue = "";
  const { id } = useParams();
  
  if (location?.state?.todo) {
    TodoValue = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando datos...</p>;
  }else{
    const TodoSelected = getTodo(id);
    TodoValue = TodoSelected?.text;
  }
  console.log(TodoValue);
  return (
    <TodoForm
      submitEvent={(newText) => editTodo(id, newText)}
      label="Edita tu TODO"
      submitText="Editar"
      type="edit"
      value={TodoValue}
      // setOpenModal={setOpenModal}
    />
  );
}

export { EditTodoPage };
