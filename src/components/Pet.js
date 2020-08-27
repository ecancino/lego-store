import React from 'react'
import styled from 'styled-components'

export function Pet({ id, url, width, height, price, onSelect, className }) {
  return (
    <li className={className} onClick={() => onSelect({ id, url, price })}>
      <figure>
        <img key={id} src={url} width={width} height={height} alt={url} />
        <figcaption>${price}</figcaption>
      </figure>
    </li>
  )
}

export default styled(Pet)`
  list-style: none;
  margin: 1em 0;
  text-align: center;
  width: 33%;
  cursor: pointer;

  & img {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  & figcaption {
    font-size: 1.5em;
    background-color: #ffffff;
    color: #000000;
    border-radius: 0.3em;
    opacity: 0.7;
  }
`
