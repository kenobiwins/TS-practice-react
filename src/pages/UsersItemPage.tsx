import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from 'services/api.services';
import { IUser } from 'types/types';

type UserItemPageParam = {
  usersId: string;
};

export const UsersItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { usersId } = useParams<UserItemPageParam>();

  useEffect(() => {
    if (usersId) {
      fetchUser(usersId).then(setUser);
    }
  }, [usersId]);

  return (
    <>
      <button>Go back</button>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </>
  );
};
