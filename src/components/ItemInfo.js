import React from 'react'
import styled from 'styled-components'

import { toCurrency } from '../cart/helpers'

export function Info({ item, className }) {
  return (
    <>
      <section className={className}>
        <em>Pet:</em> {item.name}
      </section>
      <section className={className}>
        <em>Donation:</em> {toCurrency(item.price)}
      </section>
    </>
  )
}

export default styled(Info)`
  width: 50%;
  text-align: left;
`
