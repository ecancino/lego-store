import { useReducer } from 'react'

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload);
    case 'remove':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export function useCart() {
  const [items, dispatch] = useReducer(reducer, initialState);

  return {
    items,
    addItem: payload =>
      dispatch({ type: 'add', payload }),
    removeItem: payload =>
      dispatch({ type: 'remove', payload })
  }
}

