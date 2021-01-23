import React from 'react';
import { Switch, Route } from 'react-router-dom';
import favoriteMusics from '../pages/favoriteMusics';
import index from '../pages/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={index} />
      <Route exact path="/favorites" component={favoriteMusics} />
    </Switch>
  );
}
