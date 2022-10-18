import { Suspense } from 'react';
import { Link, Header, Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Идет загрузка</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
