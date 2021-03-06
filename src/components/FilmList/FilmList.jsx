import { FilmsList } from './FilmList.styled';
import { FilmListItem } from 'components/FilmlistItem/FilmListItem';

export const FilmList = ({ filmList, openModal, onWatchedFilm }) => {
  return (
    <FilmsList>
      {filmList.map(({ id, title, img, watched }) => (
        <FilmListItem
          onWatchedFilm={onWatchedFilm}
          watched={watched}
          key={id}
          id={id}
          img={img}
          title={title}
          openModal={openModal}
        />
      ))}
    </FilmsList>
  );
};
