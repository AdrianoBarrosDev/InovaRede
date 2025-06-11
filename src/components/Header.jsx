import * as bootstrap from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import styled from 'styled-components';
import { useUser } from '../context/UserContext';
import { NewProjectModal } from './NewProjectModal';
import { SolicitacoesModal } from './SolicitacoesModal';
import { SolicitationsPopoverContent } from './SolicitationsPopoverContent';

const DivHead = styled.div`
  background-color: #DAE6F2;

  .bg-body-tertiary {
    background-color: #DAE6F2 !important;
  }

  .navbar-brand {
    font-family: 'Lexend Mega', sans-serif;
    font-size: 30px;
    margin: 0;
  }

  .perfil {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .collapse {
    justify-content: center;
  }

  .btn-dark {
    color: white;
  }

  .btn {
    margin: 0px 15px 0px 15px;
  }

  .modal-container {
    position: absolute;
  }

  .div_popup{
    position: absolute !important;
  }

  .profileButton {
    background: none;
    border-radius: 50%;
    border: none;
    overflow: hidden;
    width: 60px;
    height: 50px;
  }
  .profileButton img {
    border-radius: 50%;
  }
`;

const PopoverDiv = styled.div`
  
`;

export function Header() {

  const { user } = useUser();
  const [solicitations, setSolicitations] = useState([]);

  const fetchSolicitations = () => {
    
    if (!user) return;
  
    fetch(`http://localhost:8080/solicitations/${user.userId}`)
      .then((response) => response.json())
      .then((data) => {
        setSolicitations(data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });

  };

  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new bootstrap.Popover(popoverTriggerEl, {
        html: true,
        sanitize: false,
      });
    });
  }, []);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Solicitações</Popover.Header>
      <Popover.Body className="p-0">
        <PopoverDiv>
          {solicitations.map((solicitation) => {
              return (
                <SolicitationsPopoverContent key={solicitation.solicitationId} solicitation={solicitation}/>
              );
          })}
        </PopoverDiv>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <DivHead>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:5173/projetos">
              IR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="http://localhost:5173/projetos" className="btn">
                    Projetos
                  </a>
                </li>
                <li>
                  {/* Botão que abre o modal */}
                  <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#newProject">
                      <strong>➕︎</strong>
                  </button>
                </li>
                <li className="nav-item">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
                    <Button style={{border: "none", background: "none", color: "black"}} onClick={fetchSolicitations}>Solicitações</Button>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
            <button className="profileButton d-flex justify-content-center align-items-center overflow-hidden" style={{ width: '55px', height: '55px' }} onClick={() => window.location.href="http://localhost:5173/usuario"}>
              <img
                src={user?.image ? user.image : 'images/user_icon.png'}
                alt="Usuário"
                style={{ objectFit: 'contain', width: '75px', height: '75px' }}
              />
            </button>
          </div>
        </nav>
      </DivHead>

      {/* Modal Novo Projeto */}
      <NewProjectModal />
      <SolicitacoesModal />
    </>
  );
}
