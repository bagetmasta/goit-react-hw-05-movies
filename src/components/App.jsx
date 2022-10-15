import Movies from 'pages/Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};
