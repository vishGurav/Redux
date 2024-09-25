import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import Nav from './Nav';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  );
}

export default App;
