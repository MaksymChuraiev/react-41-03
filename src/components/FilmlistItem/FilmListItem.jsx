import {
  FilmImg,
  FilmItems,
  FilmTitle,
  FilmButton,
  FilmText,
} from './FilmListItem.styled';

export const FilmListItem = ({
  onWatchedFilm,
  watched,
  title,
  img,
  id,
  onDeleteFilm,
}) => {
  return (
    <>
      <FilmItems>
        <FilmImg alt="titel" src={`https://image.tmdb.org/t/p/w500${img}`} />
        <FilmTitle>{title}</FilmTitle>
        <FilmButton
          type="button"
          onClick={() => {
            onDeleteFilm(id);
          }}
        >
          Delete
        </FilmButton>
        <FilmText onClick={() => onWatchedFilm(id)}>
          watched:{watched ? 'yes' : 'no'}
        </FilmText>
      </FilmItems>
    </>
  );
};
