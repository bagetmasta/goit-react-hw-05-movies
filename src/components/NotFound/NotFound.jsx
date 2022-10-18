import { NavLink } from 'react-router-dom';
import { MistakeMessage } from './NotFound.styled';

const NotFound = () => {
  return (
    <MistakeMessage>
      <p>Извините, такая страница не найдена :(</p>
      <NavLink to="/">Перейти на главную страницу</NavLink>
    </MistakeMessage>
  );
};

export default NotFound;
