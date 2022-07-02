import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import AppRouter from "./components/routing/AppRouter";
import AuthRouter from "./components/routing/AuthRouter";
import myImage from "./assets/images/junior-moosa.jpg";

export const UserContext = React.createContext();

function App() {
    const [isLoggedIn] = useState(true);
    const [userActions, setUserActions] = useState({
        user: {
            username: "junior_moosa",
            name: "Swalih Moosa",
            avatar: { myImage },
        },
        clickedStory: 1,
    });
    return (
        <UserContext.Provider value={{ userActions, setUserActions }}>
            <Router>{isLoggedIn ? <AppRouter /> : <AuthRouter />}</Router>
        </UserContext.Provider>
    );
}

export default App;
