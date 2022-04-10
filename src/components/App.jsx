import { Component } from 'react';
import data from './data.json';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    isVisible: false,
    films: mapper(data),
  };

  togleVisibility = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  deleteFilm = deliteId => {
    this.setState(prevState => ({
      films: prevState.films.filter(({ id }) => id !== deliteId),
    }));
  };

  togleWathedFilm = currentId => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (film.id === currentId) {
          film.watched = !film.watched;

          return { ...film, watched: !film.watched };
        }
        return film;
      }),
    }));
  };

  render() {
    const { isVisible, films } = this.state;

    return (
      <>
        <h1>Filmoteka</h1>
        <Button isVisible={isVisible} togleVisibility={this.togleVisibility} />
        {isVisible && (
          <FilmList
            onWatchedFilm={this.togleWathedFilm}
            onDeleteFilm={this.deleteFilm}
            filmList={films}
          ></FilmList>
        )}
      </>
    );
  }
}
