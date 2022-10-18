import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 300px;
`;

export const FilmContainer = styled.div`
  display: flex;
`;

export const FilmInfo = styled.div`
  margin-left: 15px;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const GenresItem = styled.li`
  margin-right: 5px;
`;

export const BackButton = styled(NavLink)`
  margin-bottom: 7px;
  display: inline-block;

  text-decoration: none;
  color: white;
  background-color: gray;
  padding: 3px 10px;
  border-radius: 4px;
`;
