import React, { useState } from "react";
import "./App.css";
import Header from "./components/includes/Header";
import AppRouter from "./components/routing/AppRouter";
import AuthRouter from "./components/routing/AuthRouter";
import HomeScreen from "./components/screens/HomeScreen";

export const UserContext = React.createContext();

function App() {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [userActions, setUserActions] = useState({ clickedStory: 1 });
    return (
        <UserContext.Provider value={{ userActions, setUserActions }}>
            {isLoggedIn ? <AppRouter /> : <AuthRouter />}
        </UserContext.Provider>
    );
}

export default App;
