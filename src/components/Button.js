import React from 'react';
import styled from 'styled-components';

export function Button({ type = 'button', onClick, children, className }) {
    return <button type={type} onClick={onClick} className={className}>{children}</button>
}

export default styled(Button)`
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.1;
    border-radius: .25rem;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
`
