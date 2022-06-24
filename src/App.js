import { useState } from 'react';
import './App.css';
import Header from './components/includes/Header';
import AppRouter from './components/routing/AppRouter';
import AuthRouter from './components/routing/AuthRouter';
import HomeScreen from './components/screens/HomeScreen';


function App() {
    const [isLoggedIn,setLoggedIn] = useState(true)
    return (
        <>
        {
            isLoggedIn ? <AppRouter /> : <AuthRouter />
        }
        </>
    );
}

export default App;
