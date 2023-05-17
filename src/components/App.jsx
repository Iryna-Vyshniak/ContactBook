import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import UserRoutes from './UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && <UserRoutes />}

      <ToastContainer />

      <GlobalStyle />
    </>
  );
};
