import React from 'react';
import Header from './components/Header';
import Sidebar from "./components/Sidebar"
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

const App = () => {
  
  return (
    <>
      <Header/>
     <Routes>
       <Route index path="/" Component={Contact} />
       <Route path="/dashboard" Component={Dashboard}/>
     </Routes>
     <Sidebar/>

    </>
  );
};
export default App;
