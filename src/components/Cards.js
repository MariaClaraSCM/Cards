import Ana from "../assets/Ana.jpg"
import Bia from '../assets/Bia.png';
import maria from '../assets/Maria.png';
// import UserDefault from '../assets/user-default.png'
import {ModalAna, ModalBia, ModalMaria, ModalDefault} from './Modal';
import { Info } from "./Informacoes";
import { useState } from "react";

export default function Card(){

    const [openModal, setOpenModal] = useState(false);
    const [abrirModal, setAbrirModal] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [modal, setModal] = useState(false);

    return(
        <div id="blur">
            <h1>Cuidado com o volume!</h1>
            <div className="Ajustes">
                <div className="list">
                    <Info foto={Ana}  nome="Analice" idade={17} 
                    hobbie="Estudar música, ler etc." nomePets="Mabel" profissao="Desenvolvedora de Software" musica="Getting older"
                    />
                    <div className='btnAjuste'>
                        <button className='btn' onClick={() => setOpenModal(true)}>Ver Mais</button>
                    </div>
                </div>

                <div className="list">
                    <Info foto={Bia} nome="Bianca" idade={18} 
                    hobbie={"Ler, ouvir música, jogar etc."} nomePets="Jorge" profissao="Design Gráfico" musica="High School Sweethearts"
                    /> 
                    <div className='btnAjuste'>
                        <button className='btn' onClick={() => setAbrirModal(true)}>Ver Mais</button>
                    </div>                   
                </div>

                <div className="list">
                    <Info foto={maria} nome="Maria Clara" idade={17} 
                    hobbie={"Escutar música, ler, desenhar etc."} nomePets="Mike Hulk e Nino" profissao="Juíza ou Advogada" musica="Velha infância"
                    /> 
                    <div className='btnAjuste'>
                        <button className='btn' onClick={() => setAbrir(true)}>Ver Mais</button>
                    </div>                   
                </div>

                <div className="list">
                    <Info/>
                    <div className='btnAjuste'>
                        <button className='btn' onClick={() => setModal(true)}>Ver Mais</button>
                    </div> 
                </div>
            </div>
            <ModalAna isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
            <ModalBia estaAberto={abrirModal} setModalAberto={() => setAbrirModal(!abrirModal)}/>
            <ModalMaria Aberto={abrir} setAberto={() => setAbrir(!abrir)}/>
            <ModalDefault esta={modal} setAbertoModal={() => setModal(!modal)}/>
        </div>
    )
}

/*<div id="fade" className='hide'>
<div className="hide" id="modal">
    <img script={closeModalButton} className='Fechar' src={fechar} alt='Fechar' id='close-modal'/>
    <div className='flex'>
        <div>
            <div className="modal-header">
                <InfoHeaderModal foto={Ana}  nome="Analice"/>
            </div>
            <div className="modal-Body">
                <InfoBodyModal/>
            </div>
        </div>
        <img className='FT-disco' src={discAna} alt=''/>
    </div>
</div>
</div>*/