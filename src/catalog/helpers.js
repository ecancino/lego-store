import { assign } from '../helpers'

/**
 * 
 * @param {string} s  Convert id into price using the numeric value of each character
 */
const toPrice = s =>
  +s
    .split('')
    .map(c => c.charCodeAt(0))
    .reduce((a, b) => a + b + Math.random(), 0)
    .toFixed(2);

/**
 * Adds an empty breed for 
 * @param {Breed[]} breeds 
 */
export const formatBreeds = breeds => [{}].concat(breeds);

/**
 * Add the price
 * @param {Pet[]} pets 
 */
export const formatPets = pets =>
  pets.map(pet => assign(pet, { price: toPrice(pet.id) }));

/**
 * Finds a breed by id or undefined
 * @param {Breed[]} breeds 
 * @param {string} id 
 */
export const findById = (breeds, id) =>
  breeds.find(breed => breed.id === +id);