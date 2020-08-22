import React from 'react';
import styled from 'styled-components';

import Items from './Items'
import { toGroups, cartTotal } from '../cart/helpers'

const Total = styled.span`
    font-size: 1.3em;
    line-height: 3em;
`

export function Cart({ items, addItem, removeItem, className }) {
    const groups = toGroups(items)
    const total = cartTotal(items)
    return (
        <article className={className}>
            {groups.map((items, key) =>
                <Items key={key} items={items} addItem={addItem} removeItem={removeItem} />
            )}
            <Total>
                <em>Total</em>: {total}
            </Total>
        </article>
    );
}

export default styled(Cart)`
  margin: 2em 0;
  padding: 0 1em;
  min-height: 3em;
  background-color: lightgrey; 
  border-radius: 1em;
  text-align: right;
`;
