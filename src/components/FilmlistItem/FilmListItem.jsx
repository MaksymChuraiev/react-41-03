import { FilmImg, FilmItems, FilmTitle, FilmText } from './FilmListItem.styled';

export const FilmListItem = ({
  onWatchedFilm,
  watched,
  title,
  img,
  id,
  openModal,
}) => {
  return (
    <>
      <FilmItems>
        <FilmImg
          onClick={() => {
            openModal(img);
          }}
          alt="titel"
          src={`https://image.tmdb.org/t/p/w500${img}`}
        />
        <FilmTitle>{title ? title : 'No name'}</FilmTitle>

        <FilmText onClick={() => onWatchedFilm(id)}>
          watched: {watched ? 'yes' : 'no'}
        </FilmText>
      </FilmItems>
    </>
  );
};
