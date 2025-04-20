import { Route, Routes } from "react-router-dom";
import { CadastroUser } from "../components/CadastroUser";
import { Inicio } from "../pages/Inicio";
import { Login } from "../pages/Login";
import { Projetos } from "../pages/Projetos";
import { Usuario } from "../pages/Usuario";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/inicio' element={<Inicio />}/>
            <Route path='/cadastro' element={<CadastroUser />}/>
            <Route path='/projetos' element={<Projetos />}/>
            <Route path='/usuario' element={<Usuario />}/>
        </Routes>
    );
}