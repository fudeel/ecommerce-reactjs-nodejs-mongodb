import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <main className="py-3">
            <Route path="/login" component={LoginScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" component={HomeScreen} exact />
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
