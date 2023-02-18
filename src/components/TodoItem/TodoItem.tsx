import { FC, useState } from 'react';
import { ITodo } from 'types/types';

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState<boolean>(todo.completed);
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
      {todo.id}. {todo.title}
    </div>
  );
};
