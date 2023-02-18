import { UserItem } from 'components/UserItem/UserItem';
import { FC } from 'react';
import { IUser } from 'types/types';

interface UsersListProps {
  users: IUser[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};
