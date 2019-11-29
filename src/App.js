import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Home from './components/home';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-56">
      	<Route path="/about" exact component={About} />
      	<Route path="/" exact component={Home} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
