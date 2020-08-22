import React from "react";
import styled from "styled-components";

const toLower = s => String(s).toLocaleLowerCase();

export function Breed({
  id,
  name,
  bred_for,
  breed_group,
  life_span,
  temperament,
  origin,
  weight,
  height,
  className
}) {
  return (
    <section className={className}>
      <h2>{name}</h2>
      <small>
        An {toLower(temperament)} dog
        {bred_for && <span>bred for {toLower(bred_for)}</span>} that has a
        lifespan of {life_span}; has a weight of {weight.metric} kg and a height
        of {height.metric} cm.
      </small>
    </section>
  );
}

export default styled(Breed)`
  margin: 2em 0;
`;
