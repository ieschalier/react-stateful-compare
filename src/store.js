import { initStore } from 'react-stateful'

const store = {
  initialState: {
    count: 0,
  },
  actions: {
    increment: ({ count }) => ({ count: count + 1 }),
    decrement: ({ count }) => ({ count: count - 1 }),
  },
}

export const {
  Provider,
  Consumer,
  actions,
  getState,
  connect,
  subscribe,
} = initStore(store)
