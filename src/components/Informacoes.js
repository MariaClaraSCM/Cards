import PropTypes from 'prop-types';
import FtDefault from '../assets/user-default.png';
import '../index.css';

export default function Info({foto, nome, idade, hobbie, profissao, nomePets, musica}){
    return(
        <div className='list'>
            <img src={foto} alt={nome}/>
            <div className='txt'>
                <ul className='UL'>
                    <li><p className='cor'>Nome: </p>{nome}</li>
                    <li><p className='cor'>Idade: </p>{idade} Anos</li>
                    <li><p className='cor'>Hobbie: </p>{hobbie}</li>
                    <li><p className='cor'>Pet: </p>{nomePets}</li>
                    <li><p className='cor'>Profissão: </p> {profissao}</li>
                    <li><p className='cor'>Música fav: </p>{musica}</li>
                </ul>
            </div>
            <div className='btnAjuste'>
                <button className='btn'>Ver Mais</button>
            </div>
        </div>
    )
}

/*export  const InfoModal = ({foto, nome, idade, hobbie, profissao, formacao, esPets, nomePets, txtPets, musica}) => {
    return(
        <div className='list-modal'>
            <img src={foto} alt={nome}/>
            <div className='txtModal'>
                <li><p>Nome:</p> {nome}</li>
                <li><p className='cor'>Idade: </p>{idade} Anos</li>
                <li><p></p>{hobbie}</li>
                <li><p></p>{profissao}</li>
                <li><p></p>{formacao}</li>
                <li><p></p>{esPets} - {nomePets}</li>
                <li><p></p>{txtPets}</li>
                <li><p></p>{musica}</li> 
            </div>
        </div>
    )
}*/

Info.propTypes = {
    foto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobbie: PropTypes.string.isRequired,
    profissao: PropTypes.string.isRequired,
    nomePets: PropTypes.string.isRequired,
    musica: PropTypes.string.isRequired
}

Info.defaultProps = {
    foto: <img src={FtDefault} alt='Desconhecido'/>,
    nome: 'Desconhecido',
    idade: 0,
    hobbie: 'Não tenho hobbie',
    profissao: 'Não trabalho',
    nomePets: '--',
    musica: 'Gosto de todas'
}

/*InfoModal.propTypes = {
    foto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobbie: PropTypes.string.isRequired,
    profissao: PropTypes.string.isRequired,
    formacao: PropTypes.string.isRequired,
    esPets: PropTypes.string.isRequired,
    nomePets: PropTypes.string.isRequired,
    txtPets: PropTypes.string.isRequired,
    musica: PropTypes.string.isRequired
}

InfoModal.defaultProps = {
    foto: <img src={FtDefault} alt='Desconhecido'/>,
    nome: 'Desconhecido',
    idade: 0,
    hobbie: 'Não tenho hobbie',
    profissao: 'Não trabalho',
    formacao: 'Não sou formado em nada',
    esPets: 'Não tenho nenhum animal',
    nomePets: '--',
    txtPets: '--',
    musica: 'Gosto de todas'
}*/
