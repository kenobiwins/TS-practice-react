import { FC, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="">home</NavLink>
            </li>
            <li>
              <NavLink to="events">events</NavLink>
            </li>
            <li>
              <NavLink to="card">card</NavLink>
            </li>
            <li>
              <NavLink to="todos">todos</NavLink>
            </li>
            <li>
              <NavLink to="users">users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
