import React from 'react';
import { Router } from '@app/routes/Router';
import { Route } from '@app/routes/Route';
import { About, Main } from '@app/app/pages';

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
