
import React from "react";
import { InfoBodyModal, InfoHeaderModal } from "./Informacoes";
import fechar from '../assets/x.png';
import Ana from '../assets/Ana.jpg';
import Bia from '../assets/Bia.png';
import Maria from '../assets/Maria.png';
import Default from '../assets/user-default.png'
import disco from '../assets/disco.png';
import discoAna from '../assets/disco-ana.png';
import discoBia from '../assets/disco-bia.png';
import discoMaria from '../assets/disco-maria.png';

function ModalAna({isOpen, setModalOpen}){

    if(isOpen){
        return(
            <div className="Background-modal">
                <div className="body-modal">
                    <div className="flex-fechar"><img onClick={setModalOpen} className="Fechar" src={fechar} alt="Fechar"/></div>
                    <div className="flex">
                        <div>
                            <div><InfoHeaderModal foto={Ana} musica="Getting older - Billie Eilish"/></div>
                            <div>
                            <InfoBodyModal idade={17} hobbie="Estudar música, ler etc." nomePets="Mabel" profissao="Desenvolvedora de Software" esPets="Gato" desc="Uma gatinha branca com listras cinzas e marrons, tem olhos azuis e é muito brincalhona e preguiçosa."
                            />
                            </div>
                        </div>
                        <img className="FT-disco" src={discoAna} alt="Disco"/>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

function ModalBia({estaAberto, setModalAberto}){

    if(estaAberto){
        return(
            <div className="Background-modal">
                <div className="body-modal">
                    <div className="flex-fechar"><img onClick={setModalAberto} className="Fechar" src={fechar} alt="Fechar"/></div>
                    <div className="flex">
                        <div>
                            <div><InfoHeaderModal foto={Bia} musica="High School Sweethearts - Melanie Martinez"/></div>
                            <div>
                            <InfoBodyModal idade={18} hobbie="Ler, ouvir música, jogar etc." nomePets="Jorge" profissao="Design Gráfico" esPets="Gato" desc="O meu gato é um frajola um pouco gordinho e peludo de olhos verdes. Ele gosta de tomar iogurte e costuma pular em qualquer cadeira livre."
                            />
                            </div>
                        </div>
                        <img className="FT-disco" src={discoBia} alt="Disco"/>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

function ModalMaria({Aberto, setAberto}){

    if(Aberto){
        return(
            <div className="Background-modal">
                <div className="body-modal">
                    <div className="flex-fechar"><img onClick={setAberto} className="Fechar" src={fechar} alt="Fechar"/></div>
                    <div className="flex">
                        <div>
                            <div><InfoHeaderModal foto={Maria} musica="Velha Infância - Tribalistas"/></div>
                            <div>
                            <InfoBodyModal idade={17} hobbie="Ler, ouvir música, desenhar etc." nomePets="Mike Hulk e Nino" profissao="Juíza e Advogada" esPets="Cachorro e Papagaio" desc="Meu cachorro é preto, tem uns 10 anos e é um mini terrorista. O papagaio fala que nem uma taquara rachada é verde com amarelo."
                            />
                            </div>
                        </div>
                        <img className="FT-disco" src={discoMaria} alt="Disco"/>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

function ModalDefault({esta, setAbertoModal}){

    if(esta){
        return(
            <div className="Background-modal">
                <div className="body-modal">
                    <div className="flex-fechar"><img onClick={setAbertoModal} className="Fechar" src={fechar} alt="Fechar"/></div>
                    <div className="flex">
                        <div>
                            <div><InfoHeaderModal foto={Default}/></div>
                            <div><InfoBodyModal/></div>
                        </div>
                        <img className="FT-disco" src={disco} alt="Disco"/>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export {ModalAna, ModalBia, ModalMaria, ModalDefault};