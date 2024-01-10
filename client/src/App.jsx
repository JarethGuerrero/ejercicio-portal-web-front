import React from 'react';
import background from './assets/background.png';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { FormRegistration } from './Pages/FormRegistration';
import { Clients } from './Pages/Clients';
import { Header } from './Components/Header';

function App() {
  return (
    <div className='min-h-screen bg-cover bg-center' style={{backgroundImage: `url(${background})`}}>
      <div className="w-full flex flex-col justify-center max-w-5xl mx-auto">
        <Header />
        <div className="flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer-registration" element={<FormRegistration />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
