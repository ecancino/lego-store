import ky from "ky";

import { formatBreeds, formatPets } from "./helpers";

const apiKey = "567f973f-9dce-4fab-ac95-ffb41a16a774";

const api = ky.create({
  prefixUrl: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": apiKey
  }
});

export const getBreeds = () =>
  api
    .get(`breeds`)
    .json()
    .then(formatBreeds);

export const findPets = ({ id }) =>
  api
    .get(`images/search?size=full&limit=10&breed_id=${id}`)
    .json()
    .then(formatPets);
