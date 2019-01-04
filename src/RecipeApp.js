import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList/RecipeList';
import Nav  from './navbar';
import Header from './header-component/Header';
import Form from './forms/Form';

class RecipeApp extends Component {
  render() {
      return(
        <div>
          <Nav />
          <Header />
          <RecipeList />
          <Form />
        </div>
      )
  }
}

export default RecipeApp;
