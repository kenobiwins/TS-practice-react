import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'types/types';
interface UserListProps {
  user: IUser;
  state?: any;
}
export const UserItem: FC<UserListProps> = ({ user, state }) => {
  return (
    <li>
      <Link to={'/users/' + user.id} state={state}>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
      </Link>
    </li>
  );
};
