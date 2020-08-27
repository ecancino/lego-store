import React from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import Info from './ItemInfo'
import Controls from './Controls'

import { toItem } from '../cart/helpers'

export function Items({ items, addItem, removeItem, className }) {
  const item = toItem(items)
  const deleteItem = () => removeItem(item.id)
  const createItem = () =>
    addItem({ ...item, price: item.unitPrice, id: uuid() })

  return (
    <ul className={className}>
      <li>
        <Info item={item} />
        <Controls
          count={item.count}
          createItem={createItem}
          deleteItem={deleteItem}
        />
      </li>
    </ul>
  )
}

export default styled(Items)`
  padding: 1em 0.1em;
  margin: 0 auto;

  & li {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`
