import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './src/navigation/Navigation';

import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;
