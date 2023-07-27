import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { UseSelector } from "react-redux";
import { CssBaseline,  } from "@mui/material";

function App(){
    return <div className="app">
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/profile/:userId" element={<ProfilePage />}/>


        </Routes>
    </BrowserRouter>
    </div>

}
export default App;