import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import React from 'react';
import UserProfile from './components/UserProfile';
import UserProfile from './components/UserProfile';
import React from 'react';
import Header from './components/Header';     
import MainContent from './components/MainContent'; 
import Footer from './components/Footer'; 
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; 
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    
    <>
     <div>
      <Header />     
      <MainContent />    
      <Footer />          
    </div>
    return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
       <div>
            <WelcomeMessage /> 
        </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Avid reader and traveler" 
      />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
