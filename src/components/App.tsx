import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardPage } from 'pages/CardPage';
import { EventsExamplePage } from 'pages/EventsExamplePage';
import { TodosPage } from 'pages/TodosPage';
import { UsersPage } from 'pages/UsersPage';
import { Layout } from 'pages/Layout';
import { UsersItemPage } from 'pages/UsersItemPage';
import { TodoItemPage } from 'pages/TodoItemPage';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
        <Route path="events" element={<EventsExamplePage />} />
        <Route path="card" element={<CardPage />} />

        <Route path="todos" element={<TodosPage />} />
        <Route path="todos/:todosId" element={<TodoItemPage />} />

        <Route path="users" element={<UsersPage />} />
        <Route path="users/:usersId" element={<UsersItemPage />} />
      </Route>
    </Routes>
  );
};
