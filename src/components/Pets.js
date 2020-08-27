import React from 'react'
import styled from 'styled-components'

import Pet from './Pet'

export function Pets({ pets, className, onSelect }) {
  return (
    <ol className={className}>
      {pets.map((pet) => (
        <Pet key={pet.id} {...pet} onSelect={onSelect} />
      ))}
    </ol>
  )
}

export default styled(Pets)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`
