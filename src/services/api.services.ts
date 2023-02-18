import axios from 'axios';
import { ITodo, IUser } from 'types/types';

export const fetchUsers = async (): Promise<IUser[]> => {
  // <IUser[]>
  return await axios
    .get<IUser[]>('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.data);
};

export const fetchUser = async (id:string): Promise<IUser> => {
  // <IUser[]>
  return await axios
    .get<IUser>(`https://jsonplaceholder.typicode.com/users/`+ id)
    .then(response => response.data);
};

export const fetchTodos = async (): Promise<ITodo[]> => {
  return await axios
    .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: 10,
      },
    })
    .then(response => response.data);
};
