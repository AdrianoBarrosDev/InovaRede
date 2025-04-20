import styled from "styled-components";

const FormInput = styled.input`
    width: 498px;
    margin-bottom: 10px;

    .inputDate {
        width: 200px;
    }
`;

export function NewProjectModal() {

    return (

      <div className="modal fade" id="newProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-xl">
          <div className="modal-content">

            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Novo Projeto</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div className="modal-body">
                <FormInput type="text" className="form-control" id="newProjectTitle" placeholder="Título"/>
                <FormInput type="text" className="form-control" id="newProjectDescription" placeholder="Descrição"/>
                <FormInput type="text" className="form-control inputDate" id="newProjectStartDate" placeholder="Data Início"/>
                <FormInput type="text" className="form-control inputDate" id="newProjectEndDate" placeholder="Data Término"/>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary">
                    Salvar
                </button>
            </div>

          </div>
        </div>

      </div>

    );

  }
  