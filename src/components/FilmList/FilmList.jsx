import { FilmsList } from './FilmList.styled';
import { FilmListItem } from 'components/FilmlistItem/FilmListItem';

export const FilmList = ({ filmList }, onDeleteFilm, onWatchedFilm) => {
  return (
    <FilmsList>
      {filmList.map(({ id, title, img, watched }) => (
        <FilmListItem
          onWatchedFilm={onWatchedFilm}
          watched={watched}
          key={id}
          img={img}
          title={title}
          onDeleteFilm={onDeleteFilm}
        />
      ))}
    </FilmsList>
  );
};
