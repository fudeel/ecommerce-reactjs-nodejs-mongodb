import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <main className="py-3">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
