import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'modules/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
