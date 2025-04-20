import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProjetosCards } from "../components/ProjetosCards";
import { ProjetosContent } from "../components/ProjetosContent";
import { useUser } from "../context/UserContext";

export function Projetos() {

    const navigate = useNavigate();
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (!isLoading && user === null) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);

    return (
        <>
            <Header />
            <ProjetosContent />
            <ProjetosCards />
        </>
    );

}