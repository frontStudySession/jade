import React from 'react';
import { Router } from './routes/Router';
import { Route } from './routes/Route';
import { About, Main } from './app/pages';

function App() {
  return (
    <Router>
      <Route
        path="/"
        component={<Main />}
      />
      <Route
        path="/about"
        component={<About />}
      />
    </Router>
  );
}

export default App;
