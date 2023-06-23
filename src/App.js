import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import React from 'react';
import SignUp from "./SignUp.js"
import Admin from "./Admin.js"
import Login from "./Login.js"
import TySignIn from './TySignIn';
import Dashboard from './Dashboard';
import Add from './Add';
import TyAdd from './TyAdd';
import View from './View';
import TyDelete from './TyDelete';
import AdminDash from './AdminDash';

function App() {
  const currentUser = false
  const RequireAuth = ({children})=>{
    return currentUser ? children: <Navigate to="/login"/>;
  }
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login/>}></Route>          
            <Route index element={<RequireAuth><Login></Login></RequireAuth>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/tysignin" element={<TySignIn/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/tyadd" element={<TyAdd/>}></Route>
          <Route path="/view/:feedbackId" element={<View/>}></Route>
          <Route path="/tydelete" element={<TyDelete/>}></Route>
          <Route path="/admindash" element={<AdminDash/>}></Route>
          <Route path="*" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
