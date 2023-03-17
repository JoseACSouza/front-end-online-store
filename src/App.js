import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <Switch>
        {/* Quando estiver na rota / renderize: Login */}
        <Route exact path="/" component={ Home } />
      </Switch>
    </main>
  );
}

export default App;
