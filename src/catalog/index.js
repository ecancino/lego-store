import { useState, useEffect } from "react";

import { findPets, getBreeds } from "./api";

export const spike = {
  weight: {
    imperial: "60 - 120",
    metric: "27 - 54"
  },
  height: {
    imperial: "22 - 27",
    metric: "56 - 69"
  },
  id: 10,
  name: "American Bulldog",
  breed_group: "Working",
  life_span: "10 - 12 years",
  temperament:
    "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant"
};

export const usePets = breed => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (breed) {
      findPets(breed)
        .then(setPets)
        .finally(() => setLoading(false));
    }
  }, [breed]);

  return { pets, loading };
};

export const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBreeds()
      .then(setBreeds)
      .finally(() => setLoading(false));
  }, []);

  return { breeds, loading };
};
