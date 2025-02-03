import { render } from 'preact';
import './index.css';
import { App } from './app.jsx';
import AppContextProvider  from './context/AppContext.jsx';

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app')
);
