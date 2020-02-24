import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "../modules/todos";

type TodosProps = {
  items: Todo[];
  onInsert: (text: string) => void;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
};

function Todos({ items, onInsert, onRemove, onToggle }: TodosProps) {
  const handleToggle = (id: string) => {
    onToggle(id);
  };

  const handleRemove = (id: string) => {
    onRemove(id);
  };

  const handleInsert = (text: string) => {
    onInsert(text);
  };

  return (
    <>
      <TodoInput onInsert={text => handleInsert(text)} />

      {items.length === 0 ? (
        <span>할 일이 없습니다.</span>
      ) : (
        <ul>
          {items.map(item => {
            return (
              <TodoList
                key={item.id}
                todo={item}
                onToggle={id => handleToggle(id)}
                onRemove={id => handleRemove(id)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Todos;
