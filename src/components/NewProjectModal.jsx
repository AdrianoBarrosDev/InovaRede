import { Form } from "react-router-dom";
import styled from "styled-components";

const FormInput = styled.div`


.new_project {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.dates{
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
}

.date{
  width: 40%;
}
.img_escolha{

}

.projetos_texts{
  width: 40%;
}

.img-fluid{
  border: black 2px dashed;
}

.projetos_texts{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mb-3{
  width: 100%;
}

.btn-primary{
    margin-top: 30px;
    width: 20%;
    background-color: #06284B;
    border: none;
}

`;

export function NewProjectModal() {

    return (

    <FormInput>
      <div className="modal fade" id="newProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog modal-xl">
          <div className="modal-content">

            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Novo Projeto</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div className="modal-body">
              <div className="new_project">
                <div className="img_escolha">
                  <img src="images/placeholder_img.jpg" class="img-fluid" alt="..."/>
                  <div class="mb-3">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" type="file" id="formFile"/>
                  </div>
                </div>
                <div className="projetos_texts">
                  <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Título</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className="dates">
                  <input type="date" class="form-control date" id="exampleInputEmail1"/>
                  <input type="date" class="form-control date" id="exampleInputEmail1"/>
                  </div>
                  <label for="exampleFormControlTextarea1" class="form-label">Escolha seu curso</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Curso</option>
                    <option value="1">Computação</option>
                    <option value="2">Direito</option>
                    <option value="3">Engenharia</option>
                  </select>
                  <button type="button" className="btn btn-primary">Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </FormInput>
    );

  }
  