import Info from './Informacoes'
import Ana from "../assets/Ana.jpg"
import Bia from '../assets/Bia.jfif';
import maria from '../assets/Captura de Tela (4).png'

export default function Lista(){
    return(
        <>
            <h1>Cuidado com o volume!</h1>

            <ul className="card">
                <Info foto={Ana}  nome="Analice" idade={17} 
                hobbie={"Estudar música"}
                />
                <Info foto={Bia} nome="Bianca" idade={18} 
                hobbie={"Ler"}
                />
                <Info foto={maria} nome="Maria Clara" idade={17} 
                hobbie={"Escutar música"}
                />
                <Info/>
            </ul>
        </>
    )
}