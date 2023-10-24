import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from "./GlobalStyles/globalStyles";
import { Layout } from './Layout';
import { refreshUser } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <Loader/>
  ) : (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<Register/>} />} />
          <Route path='/login' element={<RestrictedRoute component={<Login/>} redirectTo='/contacts' />} />
          <Route path='/contacts' element={<PrivateRoute component={<Contacts/>} redirectTo='/login' />} />
        </Route>  
        </Routes>
        <GlobalStyle />
        <Toaster position="top-right" />
    </div>)
};
