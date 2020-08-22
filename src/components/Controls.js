import React from 'react';
import styled from 'styled-components';

import Button from './Button'

export function Controls({ count, deleteItem, createItem, className }) {
    return <section className={className}>
        <Button onClick={deleteItem}>-</Button>
        <span className='count'>{count}</span>
        <Button onClick={createItem}>+</Button>
    </section>
}

export default styled(Controls)`
    width: 10em;

    & .count {
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.1;
    }
`