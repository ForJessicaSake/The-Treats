import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Hero/Hero';
import Favourite from './components/favourite/favourite';
import Sales from './components/Sale/sales';
import Treat from './components/Treats/Treat'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar />
      <Main />
      <Favourite />
      <Sales />
      <Treat />
      <Footer />

    </div>
  );
}

export default App;
