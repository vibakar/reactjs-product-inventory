import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Home from './components/home';
import ProductDetail from './components/productDetail';
import AddProduct from './components/addProduct';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-56">
        <Route path="/" exact component={Home} />
        <Route path="/productDetail/:id" component={ProductDetail} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product/:id" component={AddProduct} />
      	<Route path="/about" component={About} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;