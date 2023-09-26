import React from 'react';
import Form from './components/Form';
import UserProfile from './components/UserProfile';
import Survey from './components/Survey';
import SignUpForm from './components/User';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Topbar from './components/Topbar';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Topbar />
          <Routes>
            <Route path='/' element={<Form />} exact />
            <Route path='/form' element={<Form />} exact />
            <Route path='/profile' element={<UserProfile />} exact />
            <Route path='/survey' element={<Survey />} exact />
            <Route path='/signup' element={<SignUpForm />} exact />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;