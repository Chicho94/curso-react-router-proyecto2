import React from "react";
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';

function NewTodoPage(){
  const { stateUpdaters: {addTodo} } = useTodos();

  return(
    <TodoForm
      submitEvent={addTodo}
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      value=""
      // setOpenModal={setOpenModal}
    />
  )
}

export { NewTodoPage };