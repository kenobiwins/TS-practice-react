import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'types/types';
interface UserListProps {
  user: IUser;
}
export const UserItem: FC<UserListProps> = ({ user }) => {
  return (
    <div>
      <Link to={'/users/' + user.id}>
        <p>name: {user.name}</p>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>address: {user.address.city}</p>
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
      </Link>
    </div>
  );
};
