import React from 'react'
import styled from 'styled-components'

import Copyleft from './Copyleft'

export function Footer({ className }) {
  return (
    <footer className={className}>
      <div className="logo">
        <Copyleft width={1} />
        &nbsp;
        <span>2020</span>
      </div>
    </footer>
  )
}

export default styled(Footer)`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  background-color: #dddddd;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  & .logo {
    line-height: 1.1em;
  }

  & .logo svg {
    width: 1em;
    height: 1em;
    vertical-align: top;
  }
`
