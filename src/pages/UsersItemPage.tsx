import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchUser } from 'services/api.services';
import { IUser } from 'types/types';

type UserItemPageParam = {
  usersId: string;
};

export const UsersItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { usersId } = useParams<UserItemPageParam>();

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (usersId) {
      fetchUser(usersId).then(setUser);
    }
  }, [usersId]);

  const handleGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      <h2>{user?.name}</h2>
      <p>email: {user?.email}</p>
      <p>username: {user?.username}</p>
      <p>address: {user?.address.city}</p>
      <p>{user?.address.street}</p>
      <p>{user?.address.suite}</p>
    </>
  );
};
