import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useCart } from '../cart'
import Cart from './Cart'

import { usePets, spike } from '../catalog'
import { findById } from '../catalog/helpers'
import Select from './Select'
import Breed from './Breed'
import Pets from './Pets'

export default function Main({ breeds }) {
  const [breed, setBreed] = useState(spike)

  const { pets, loading } = usePets(breed || {})

  const { items, addItem, removeItem } = useCart()

  const onBreed = (event) => {
    setBreed(findById(breeds, +event.target.value))
  }

  const onPet = (pet) => {
    addItem({
      id: uuid(),
      type: pet.id,
      url: pet.url,
      price: pet.price,
      name: `(${pet.id}): ${breed.name}`,
    })
  }

  return (
    <>
      <Cart items={items} addItem={addItem} removeItem={removeItem} />
      <Select
        value={breed}
        options={breeds}
        onChange={onBreed}
        disabled={breeds.length <= 0}
      />
      {!breed ? <p>Select a breed</p> : <Breed {...breed} />}
      {loading ? <p>Loading...</p> : <Pets pets={pets} onSelect={onPet} />}
    </>
  )
}
