import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  // Si el publisher no es válido, lanzamos un error
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  // Si el publisher es válido, devolvemos los heroes que coincidan con el publisher
  return heroes.filter((hero) => hero.publisher === publisher);
}