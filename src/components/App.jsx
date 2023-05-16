import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { GlobalStyle } from 'styles/GlobalStyle';
import UserRoutes from './UserRoutes';

export const App = () => {
  return (
    <>
      <UserRoutes />

      <ToastContainer />

      <GlobalStyle />
    </>
  );
};
