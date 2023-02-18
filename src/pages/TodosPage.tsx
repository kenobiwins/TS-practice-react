import List from 'components/List/List';
import { TodoItem } from 'components/TodoItem/TodoItem';
import { FC, useEffect, useState } from 'react';
import { fetchTodos } from 'services/api.services';
import { ITodo } from 'types/types';

export const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  return (
    <>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </>
  );
};
