export const mapper = films =>
  films.map(({ backdrop_path, id, title }) => ({
    img: backdrop_path,
    id,
    title,
    wathed: false,
  }));
