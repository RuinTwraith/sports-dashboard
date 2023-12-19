import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
