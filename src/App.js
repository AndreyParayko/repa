import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import Content from './components/Content';

function App() {
  return (

    <div style={{ height: "100vh" }}>
      <Header />
      <Card />
      <Pagination />
      <Footer />
      {/*<Content />*/}
    </div>

  );
}

export default App;
