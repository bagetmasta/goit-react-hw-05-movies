import { Suspense } from 'react';
import { StyledNavLink, Header, Container } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Идет загрузка</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
