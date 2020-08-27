import React from 'react'
import styled from 'styled-components'

import { toLower } from '../helpers'

export function Breed({
  id,
  name,
  bred_for,
  life_span,
  temperament,
  weight,
  height,
  className,
}) {
  return (
    <section className={className} id={id}>
      <h2>{name}</h2>
      <small>
        An {toLower(temperament)} dog
        {bred_for && <span>bred for {toLower(bred_for)}</span>} that has a
        lifespan of {life_span}; has a weight of {weight.metric} kg and a height
        of {height.metric} cm.
      </small>
    </section>
  )
}

export default styled(Breed)`
  margin: 2em 0;
`
