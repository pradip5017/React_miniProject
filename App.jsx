import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/header/Header';
import NavScrollExample from './components/header/NavBarHeader';
import BasicExample1 from './components/header/Product';
import UncontrolledExample1 from './components/header/HeaderImage';
import HeaderSubImage from './components/header/HeaderSubImage';
function App() {


  return (
    <>
      <div>
       <NavScrollExample/>
       <BasicExample/>
       <UncontrolledExample1/>
     
     <HeaderSubImage/>
       <BasicExample1/>
      
       
      
      </div>
     
    </>
  )
}

export default App
