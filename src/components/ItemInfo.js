import React from 'react';

import { toCurrency } from '../cart/helpers'

export default function Info({ item }) {
    return <>
        <section>
            <em>Pet:</em> {item.name}
        </section>
        <section>
            <em>Donation:</em> {toCurrency(item.price)}
        </section>
    </>
}
