import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { CommonLayout } from './CommonLayout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RestrictedRoute component={<Register />} redirectTo="/contacts" />} />
        <Route path="/login" element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login" />} />
      </Route>
    </Routes>
  );
};
