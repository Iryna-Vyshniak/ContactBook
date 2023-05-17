import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'modules/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <RestrictedRoute
                component={<ContactsPage />}
                redirectTo="/login"
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
