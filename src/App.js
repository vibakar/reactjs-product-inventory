import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

// import About from './components/about';
// import Home from './components/home';
// import ProductDetail from './components/productDetail';
// import AddProduct from './components/addProduct';
// import Profile from './profile';

const Home = lazy(() => import('./components/home'));
const ProductDetail = lazy(() => import('./components/productDetail'));
const AddProduct = lazy(() => import('./components/addProduct'));
const About = lazy(() => import('./components/about'));
const Profile = lazy(() => import('./components/profile'));

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-56">
        <Suspense fallback={<h3>Loading...</h3>}>
          <Route path="/" exact component={Home} />
          <Route path="/productDetail/:id" component={ProductDetail} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product/:id" component={AddProduct} />
          <Route path="/profile" component={Profile} />
        	<Route path="/about" component={About} />
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;