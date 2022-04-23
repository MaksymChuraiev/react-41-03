import { useState, useEffect } from 'react';
import { fetchFilms } from 'services/api';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { LoadMore } from './LoadMore/LoadMore';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetchFilms(page)
      .then(films => {
        const mapperFilms = mapper(films.data.results);
        setFilms(prevFilms => [...prevFilms, ...mapperFilms]);
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const togleWathedFilm = currentId => {
    setFilms(prevFilms =>
      prevFilms.map(film => {
        if (currentId === film.id) {
          return { ...film, watched: !film.watched };
        }
        return film;
      })
    );
  };

  const openModal = image => {
    setImage(image);
  };
  const closeModal = () => {
    setImage('');
  };

  return (
    <>
      <h1 style={{ marginLeft: 25, marginTop: 20 }}>Filmoteka</h1>
      {isLoading && <h2>Loading...</h2>}
      <FilmList
        filmList={films}
        // onDeleteFilm={this.deleteFilm}
        onWatchedFilm={togleWathedFilm}
        openModal={openModal}
      />
      {films.length && <LoadMore onClick={loadMore} />}
      {image && <Modal image={image} onClose={closeModal} />}
    </>
  );
};

// export class App extends Component {
//   state = {
//     films: [],
//     isLoading: false,
//     page: 1,
//   };

//   getFetchFilm = page => {
//     this.setState({ isLoading: true });
//     fetchFilms(page)
//       .then(({ data }) =>
//         this.setState(prevState => ({
//           films: [...prevState.films, ...mapper(data.results)],
//         }))
//       )
//       .catch(error => console.log(error))
//       .finally(this.setState({ isLoading: false }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       console.log(this.state.page);
//       this.getFetchFilm(this.state.page);
//     }
//   }
//   componentDidMount() {
//     this.getFetchFilm(this.state.page);
//   }

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   // deleteFilm = delId => {
//   //   this.setState(prevState => ({
//   //     films: prevState.films.filter(({ id }) => id !== delId),
//   //   }));
//   // };

//   togleWathedFilm = currentId => {
//     this.setState(prevState => ({
//       films: prevState.films.map(film => {
//         if (currentId === film.id) {
//           return { ...film, watched: !film.watched };
//         }
//         return film;
//       }),
//     }));
//   };

//   render() {
//     const { films } = this.state;

//     return (
//       <>
//         <h1>Filmoteka</h1>

//         <FilmList
//           filmList={films}
//           // onDeleteFilm={this.deleteFilm}
//           onWatchedFilm={this.togleWathedFilm}
//         />
//         {this.state.films.length > 0 && <LoadMore onClick={this.loadMore} />}
//       </>
//     );
//   }
// }
