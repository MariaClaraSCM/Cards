import React, { useEffect } from "react";
import { InfoBodyModal, InfoHeaderModal } from "./Informacoes";
import fechar from '../assets/x.png';
import Ana from '../assets/Ana.jpg';
import Bia from '../assets/Bia.png';
import Maria from '../assets/Maria.png';
import Default from '../assets/default-foto.png';
import discoAna from '../assets/disco-ana.png';
import discoBia from '../assets/disco-bia.png';
import discoMaria from '../assets/disco-maria.png';
import musicAna from '../assets/music/Getting Older.mp3';
import musicBia from '../assets/music/High School Sweethearts.mp3';
import musicMaria from '../assets/music/Velha Infância - 2004 Digital Remaster.mp3';
import disco from '../assets/disco.png';

function ModalAna({ isOpen, setModalOpen }) {
  useEffect(() => {
    const audio = new Audio(musicAna);

    if (isOpen) {
      audio.play();
    } 
    else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className="Background-modal">
        <div className="body-modal">
          <div className="flex-fechar">
            <img onClick={setModalOpen} className="Fechar" src={fechar} alt="Fechar" />
          </div>
          <div className="flex">
            <div>
              <div><InfoHeaderModal nome='Analice' foto={Ana} musica="Getting Older - Billie Eilish" /></div>
              <div>
                <InfoBodyModal 
                  idade={17} 
                  hobbie="Estudar música, ler etc." 
                  nomePets="Mabel" 
                  profissao="Desenvolvedora de Software" 
                  esPets="Gato" 
                  desc="Uma gatinha branca com listras cinzas e marrons, tem olhos azuis e é muito brincalhona e preguiçosa."
                />
              </div>
            </div>
            <img className="FT-disco" src={discoAna} alt="Disco" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function ModalBia({ estaAberto, setModalAberto }) {
  useEffect(() => {
    const audio = new Audio(musicBia);

    if (estaAberto) {
      audio.play();
    }
    else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [estaAberto]);

  if (estaAberto) {
    return (
      <div className="Background-modal">
        <div className="body-modal">
          <div className="flex-fechar">
            <img onClick={setModalAberto} className="Fechar" src={fechar} alt="Fechar" />
          </div>
          <div className="flex">
            <div>
              <div><InfoHeaderModal nome='Bianca' foto={Bia} musica="High School Sweethearts - Melanie Martinez" /></div>
              <div>
                <InfoBodyModal 
                  idade={18} 
                  hobbie="Ler, ouvir música, jogar etc." 
                  nomePets="Jorge" 
                  profissao="Design Gráfico" 
                  esPets="Gato" 
                  desc="O meu gato é um frajola um pouco gordinho e peludo de olhos verdes. Ele gosta de tomar iogurte e costuma pular em qualquer cadeira livre."
                />
              </div>
            </div>
            <img className="FT-disco" src={discoBia} alt="Disco" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function ModalMaria({ Aberto, setAberto }) {
  useEffect(() => {
    const audio = new Audio(musicMaria);

    if (Aberto) {
      audio.play();
    }
    else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [Aberto]);

  if (Aberto) {
    return (
      <div className="Background-modal">
        <div className="body-modal">
          <div className="flex-fechar">
            <img onClick={setAberto} className="Fechar" src={fechar} alt="Fechar" />
          </div>
          <div className="flex">
            <div>
              <div><InfoHeaderModal nome='Maria Clara' foto={Maria} musica="Velha Infância - Tribalistas" /></div>
              <div>
                <InfoBodyModal 
                  idade={17} 
                  hobbie="Ler, ouvir música, desenhar etc." 
                  nomePets="Mike Hulk e Nino" 
                  profissao="Juíza e Advogada" 
                  esPets="Cachorro e Papagaio" 
                  desc="Meu cachorro é preto, tem uns 10 anos e é um mini terrorista. O papagaio fala que nem uma taquara rachada é verde com amarelo."
                />
              </div>
            </div>
            <img className="FT-disco" src={discoMaria} alt="Disco" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function ModalDefault({ esta, setAbertoModal }) {
  if (esta) {
    return (
      <div className="Background-modal">
        <div className="body-modal">
          <div className="flex-fechar">
            <img onClick={setAbertoModal} className="Fechar" src={fechar} alt="Fechar" />
          </div>
          <div className="flex">
            <div>
              <div><InfoHeaderModal foto={Default} /></div>
              <div><InfoBodyModal /></div>
            </div>
            <img className="FT-disco" src={disco} alt="Disco" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export { ModalAna, ModalBia, ModalMaria, ModalDefault };
