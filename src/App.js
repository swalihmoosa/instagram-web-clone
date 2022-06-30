import React, { useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import AppRouter from "./components/routing/AppRouter";
import AuthRouter from "./components/routing/AuthRouter";

export const UserContext = React.createContext();

function App() {
    const [isLoggedIn] = useState(true);
    const [userActions, setUserActions] = useState({
        clickedStory: 1,
        clickedExplore: 0,
    });
    return (
        <UserContext.Provider value={{ userActions, setUserActions }}>
            {isLoggedIn ? <AppRouter /> : <AuthRouter />}
        </UserContext.Provider>
    );
}

export default App;
