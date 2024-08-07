import Info from "./Informacoes";
import Ana from "../assets/Captura de Tela (4).png"

export default function Lista(){
    return(
        <>
            <h1>Quem nos somos?</h1>

            <ul className="card">
                <Info foto={Ana}  nome="Analice" idade={17} 
                hobbie={"Estudar música"}
                />
                <Info nome="Bianca" idade={18} 
                hobbie={"Ler"}
                />
                <Info nome="Maria Clara" idade={17} 
                hobbie={"Escutar música"}
                />
                <Info/>
            </ul>
        </>
    )
}