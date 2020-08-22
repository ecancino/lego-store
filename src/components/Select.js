import React from "react";
import styled from "styled-components";

export function Select({ value, options, onChange, className, disabled = false }) {
  return (
    <select onChange={onChange} value={value.id} disabled={disabled} className={className}>
      {options.map((option, key) => (
        <option key={key} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default styled(Select)`
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
    no-repeat right 0.75rem center/8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;

  &:focus {
    border-color: #000000;
    outline: 0;
    box-shadow: 0;
  }

  &:disabled {
    color: #6c757d;
    background-color: #e9ecef;
  }
`;
