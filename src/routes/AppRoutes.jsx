import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Inicio } from "../pages/Inicio";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/'/>
            <Route path='/login' element={<Login />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/cadastro'/>
            <Route path='/home'/>
        </Routes>
    );
}