import { Route, Routes } from "react-router-dom";
import { CadastroUser } from "../components/CadastroUser";
import { Inicio } from "../pages/Inicio";
import { Login } from "../pages/Login";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/'/>
            <Route path='/login' element={<Login />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/cadastro' element={<CadastroUser />}/>
            <Route path='/home'/>
        </Routes>
    );
}