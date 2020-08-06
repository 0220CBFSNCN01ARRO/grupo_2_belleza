import React from 'react';
import Content from './Content';
import NavBar from './NavBar';
import '../assets/css/app.css';


function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h2 className="mb-4">Paneles de Control <span className="dh-brand">DHStyle</span></h2>
        <div className="row">
          <Content />
        </div>
      </div>
    </div>
);
}

export default App;
