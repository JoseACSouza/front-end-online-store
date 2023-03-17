import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <main>
      <Switch>
        {/* Quando estiver na rota / renderize: Login */}
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
      </Switch>
    </main>
  );
}

export default App;
