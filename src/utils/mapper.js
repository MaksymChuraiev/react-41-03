export const mapper = films =>
  films.map(({ backdrop_path: img, id, title }) => ({
    img,
    id,
    title,
    wathed: false,
  }));
