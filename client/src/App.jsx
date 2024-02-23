import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
