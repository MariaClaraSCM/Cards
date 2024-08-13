
import Fechar from '../assets/x.png';
import Ana from "../assets/Ana.jpg"
import Bia from '../assets/Bia.jfif';
import maria from '../assets/Captura de Tela (4).png';
import discAna from '../assets/disco-ana.png';
import { Info, InfoBodyModal, InfoHeaderModal } from "./Informacoes";
import "./Modal"

export default function Card(){
    return(
        <div id="blur">
            <h1>Cuidado com o volume!</h1>
            <div className="Ajustes">
                <div className="list">
                    <Info foto={Ana}  nome="Analice" idade={17} 
                    hobbie={"Estudar música"}
                    />
                    <div className='btnAjuste'>
                        <button className='btn' onclick="modalAnaOpen()">Ver Mais</button>
                    </div>
                </div>

                <div className="list">
                    <Info foto={Bia} nome="Bianca" idade={18} 
                    hobbie={"Ler"}
                    /> 
                    <div className='btnAjuste'>
                        <button className='btn'>Ver Mais</button>
                    </div>                   
                </div>

                <div className="list">
                    <Info foto={maria} nome="Maria Clara" idade={17} 
                    hobbie={"Escutar música"}
                    /> 
                    <div className='btnAjuste'>
                        <button className='btn'>Ver Mais</button>
                    </div>                   
                </div>

                <div className="list">
                    <Info/>
                    <div className='btnAjuste'>
                        <button className='btn'>Ver Mais</button>
                    </div> 
                </div>
            </div>
            <div className='Modal' id='modalAna'>
                <img className='Fechar' onclick="modalAna()" src={Fechar} alt='Fechar'/>
                <div className='flex'>
                    <div>
                        <InfoHeaderModal foto={Ana}  nome="Analice" />
                        <InfoBodyModal/>
                    </div>
                    <img className='FT-disco' src={discAna} alt='disco Ana'/>
                </div>
            </div>
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