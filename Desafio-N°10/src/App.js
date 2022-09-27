import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import ShopProvider from './context/ShopProvider';
//import ReturnTemprano from './components/ReturnTemprano';
//import BinaryOperator from './components/BinaryOperator';
//import InLineTernary from './components/InLineTernary';
//import InLineStyles from './components/InLineStyles';
//import ClassBasedConditions from './components/ClassBasedConditions';
//import SpreadProperties from './components/SpreadProperties';


//SpreadProperties
{/*const stylesComponent = {
  fontSize: '22px',
  color: 'red'
} */}

function App() {

  return (
    <ShopProvider>
    <BrowserRouter>
    <NavBar/>
    {/* <ReturnTemprano condition={30}/> */}
    {/* <BinaryOperator condition={false}/> */}
    {/* <InLineTernary condition={"Hola"}/> */}
    {/* <InLineStyles condition={false}/> */}
    {/* <ClassBasedConditions condition={true} otherClass={"other-class"}/> */}
    {/* <SpreadProperties additionalStyles={stylesComponent}/> */}

    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ShopProvider>
  );
}


export default App;
