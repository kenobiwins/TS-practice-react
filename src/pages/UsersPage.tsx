import List from 'components/List/List';
import { UserItem } from 'components/UserItem/UserItem';
import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'services/api.services';
import { IUser } from 'types/types';

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const location = useLocation();
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem state={{ from: location }} key={user.id} user={user} />
        )}
      />
    </>
  );
};
