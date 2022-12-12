import React from 'react'
import { Navigation } from './screens/Navigation'
import { createStore } from "redux";
import { rootReducer } from './redux/RootReducer';
import { Provider } from'react-redux'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}