import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import logo from './logo.svg';
import './App.css';
import Password from './Password';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
      </div>
    </Provider>
  );
}

export default App;
