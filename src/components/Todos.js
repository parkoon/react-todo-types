import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todos({ items = [], onInsert, onRemove, onToggle }) {
  const handleToggle = id => {
    onToggle(id);
  };

  const handleRemove = id => {
    onRemove(id);
  };

  const handleInsert = text => {
    onInsert(text);
  };

  return (
    <>
      <TodoInput onInsert={text => handleInsert(text)} />
      <ul>
        {items.map(item => {
          console.log(item);
          return (
            <TodoList
              text={item.text}
              key={item.id}
              onToggle={() => handleToggle(item.id)}
              onRemove={() => handleRemove(item.id)}
              done={item.done}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
