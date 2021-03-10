import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import QueryResultContextProvider from './contexts/QueryResultContext';
 



    ReactDOM.render(
          <QueryResultContextProvider>
            <App />
          </QueryResultContextProvider>,
          document.getElementById('root')
          );