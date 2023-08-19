import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';
import css from './CommonLayout.module.css';

export const CommonLayout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
