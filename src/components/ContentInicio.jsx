import styled from "styled-components";

const DivHead = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;

    .fs-1{
        font-family: 'Poppins';
        margin: 100px 0px 0px 10px ;
        font-size: 20px;
    }

    .fs-4{
        font-size: 20px;
        margin: 0px 0px 0px 10px;
    }

`;

const DivHead2 = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: #DAE6F2;
    margin-top: 100px;
    --bs-gutter-x: 0rem;
    

    .fs-1{
        font-family: 'Poppins';
        margin: 100px 0px 0px 10px ;
        font-size: 20px;
    }

    .fs-4{
        font-size: 20px;
        margin: 0px 0px 0px 10px;
    }

    .fs-2{
        margin-top: 50px;
        text-align:center;
    }

    img{
        padding-top:50px;
    }

`;

const DivHead3 = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    --bs-gutter-x: 0rem;

    .fs-4{
        font-size: 20px;
        margin: 50px 0px 0px 10px;
        text-align:center;
        font-family: 'Poppins';
        width: 80%
    }

    .fs-2{
        font-family: 'Poppins';
        margin-top: 100px;
        text-align:center;
    }

    .div_bottom{
        border-radius: 100px 100px 0px 0px;
        margin-top: 100px;
        height: 80px;
        background-color: #DAE6F2;
        margin-right: 0px;
    }

`;

export function ContentInicio() {

    return (
        <>
            <DivHead className="container-fluid row w-100">
            <div className="col-12 col-lg-6">
                <p class="fs-1"><strong> O Que fazemos?</strong></p>
                <p class="fs-4">A InovaRede é uma plataforma que conecta projetos acadêmicos inovadores a um vasto universo de possibilidades. Facilitamos a colaboração entre estudantes, pesquisadores e profissionais de diversas áreas, criando um ambiente propício para o compartilhamento de ideias, o desenvolvimento de pesquisas e a criação de soluções que podem transformar a sociedade.<br/><br/> Nosso objetivo é promover a inovação por meio da união de mentes criativas e do fortalecimento de iniciativas acadêmicas que buscam impactar positivamente o mundo. Através de nossa rede, você tem acesso a oportunidades de colaboração, capacitação e crescimento profissional, além de poder conectar-se com especialistas, parceiros e recursos que potencializam seus projetos acadêmicos.<br/><br/> A InovaRede acredita no poder da colaboração interdisciplinar e no impacto das ideias que, juntas, podem mudar o futuro.</p>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center ">
                <img src="\images\image 302.png" className="img-fluid" alt="..."></img>
            </div>
            </DivHead>

            <DivHead2 className="container-fluid row w-100">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img  src="\images\image.png" class="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-lg-6">
                <p class="fs-1"><strong> Quem Somos??</strong></p>
                <p class="fs-4">Na InovaRede, somos uma rede de colaboração acadêmica dedicada a fomentar a inovação e a pesquisa entre estudantes, professores e instituições de ensino. Nossa missão é conectar pessoas e projetos, promovendo um ambiente colaborativo e enriquecedor para o desenvolvimento de soluções criativas e aplicáveis ao mundo real.<br/><br/> Com uma abordagem moderna e dinâmica, a InovaRede oferece uma plataforma que facilita a troca de ideias, o compartilhamento de conhecimento e o surgimento de novas oportunidades acadêmicas. Acreditamos no poder do trabalho em equipe e na importância de formar parcerias que transformem ideias em realidades concretas.<br/><br/> Junte-se à nossa rede e faça parte de um movimento que está moldando o futuro da educação e da pesquisa!.</p>
            </div>
            </DivHead2>
            <DivHead3 className="container-fluid row w-100">
            <p class="fs-2"><strong>Contatos</strong></p>
            <p class="fs-4">Tem alguma dúvida ou quer saber mais sobre a InovaRede? Estamos aqui para ajudar!<br/><br/> 

                Entre em contato conosco para mais informações sobre como você pode se envolver com nossa rede de projetos acadêmicos ou para tirar qualquer dúvida sobre nossa plataforma.<br/> <br />
                E-mail: contato@inovarede.com <br />
                Telefone: (XX) XXXX-XXXXEndereço: Rua da Inovação, 123, Bairro Criativo, Cidade, Estado <br /><br />
                Redes sociais:<br/><br/>  
                Facebook: @InovaRede<br/> 
                Instagram: @inovarede<br/> 
                LinkedIn: InovaRede<br/> 
                Twitter: @Inova_Rede<br/> <br />

                Fique à vontade para nos enviar uma mensagem. Estamos ansiosos para ouvir de você!</p>
            
                <div className="div_bottom">
                    
                </div>
            </DivHead3>
        </>
    );

}