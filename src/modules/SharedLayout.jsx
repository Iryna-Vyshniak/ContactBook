import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

import Header from './Header/Header';
import Footer from './Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </Container>
    </>
  );
};
