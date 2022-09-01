import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
    </div>
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
    <ItemListContainer greeting={"¡Bienvenido a nuestra App!"}/>
    </>
  );
}

export default App;
