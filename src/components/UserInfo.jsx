import styled from "styled-components";

const DivHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

.user_info{
    margin-top: 100px;
    background-color: #E0E0E0;
    width: 70%;
    border-radius: 100px 100px 0px 0px;
}

.user_img{
    border-radius: 100%;
    height: 200px;
    width: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0px 25px 50px;
}

.user_img_edit{
    border-radius: 100%;
    height: 450px;
    width: 450px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.img-fluid{
    height: 100%;
}

.img_edit{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px 0px 0px 0px
}

.user_info_edit{
    padding: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.form-floating{
        width: 100%;
        margin: 20px 0px 0px 50px;
        
}

.btn-primary{
    margin: 50px 0px 0px 0px; 
    height: 50px;
    background-color: #06284B;
    border:none
}

.text_info_edit{
    width: 30%;
    margin: 0px 0px 0px -80px;
    justify-content: left;
}
.user_div{
    background-color: #E0E0E0;
    border-radius: 0px 0px 100px 100px;
    margin: 100px 0px 0px 0px;
    width: 70%;  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.btn-primary{
    width: 20%;
    height: 60px;
    justify-content: center;
    margin-bottom: 30px;
}

.btn-secondary{
    margin: 20px 0px 0px 0px;
}
`;

export function UserInfo() {

    return (
        <>
            <DivHead>
                <div className="user_info" >
                    <div className="user_img">
                        <img src="images/user_icon.png" className="img-fluid" alt=""/>
                    </div>
                </div>

                <div className="user_div">
                    <div className="user_info_edit" >
                    <div className="text_info_edit">
                        <div className="form-floating mb-3">
                                <input type="email" className="form-control " id="floatingInput" />
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" />
                            </div>
                            
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" />
                            </div>
                            
                            <div className="form-floating senha">
                                <input type="password" className="form-control" id="floatingPassword" />
                            </div>
                            
                            <div className="form-floating option">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Selecione o curso</option>
                                    <option value="1">Computação</option>
                                    <option value="2">Direito</option>
                                    <option value="3">Sistemas</option>
                                    <option value="4">Engenharia</option>
                                </select>
                            </div>
                        </div>
                        <div className="img_edit">
                            <div className="user_img_edit">
                                <img src="images/user_icon.png" className="img-fluid" alt=""/>
                            </div>
                            <button type="button" class="btn btn-secondary">Alterar Imagem</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Salvar Alterações</button>
                </div>
            </DivHead>
        </>
    );

}