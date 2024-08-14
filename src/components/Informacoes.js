import PropTypes from 'prop-types';
import FtDefault from '../assets/user-default.png';
import '../index.css';

function Info({foto, nome, idade, hobbie, profissao, nomePets, musica}){
    return(
        <div className=''>
            <img className='FT' src={foto} alt={nome}/>
            <div className='txt'>
                <ul className='UL'>
                    <li><p className='cor'>Nome: </p>{nome}</li>
                    <li><p className='cor'>Idade: </p>{idade} Anos</li>
                    <li><p className='cor'>Hobbie: </p>{hobbie}</li>
                    <li><p className='cor'>Pet: </p>{nomePets}</li>
                    <li><p className='cor'>Profissão: </p> {profissao}</li>
                    <li><p className='corM'>Música fav: </p>{musica}</li>
                </ul>
            </div>
        </div>
    )
}

function InfoHeaderModal({ foto, nome, musica}){
    return(
        <div className='header-modal'>
            <div className='flex-modal'>
                <img className='FT-modal' src={foto} alt={nome}/>
                <ul className=''>
                        <li><p className='cor'>Nome: </p>{nome}</li>
                        <li className='Musica'><p className='cor'>Música: </p>{musica}</li>
                </ul>
            </div>
        </div>
    )
}

function InfoBodyModal({nome, idade, hobbie, profissao, nomePets, esPets, desc}){
    return(
        <div className=''>
            <div className='txt-modal'>
                <ul className='UL-modal'>
                    <li><p className='cor'>Idade: </p>{idade} Anos</li>
                    <li><p className='cor'>Hobbie: </p>{hobbie}</li>
                    <li><p className='cor'>Pet: </p>{nomePets}</li>
                    <li><p className='cor'>Espécie: </p>{esPets}</li>
                    <li><p className='cor'>Descrição: </p>{desc}</li>
                    <li><p className='cor'>Profissão: </p> {profissao}</li>
                </ul>
            </div>
        </div>
    )
}

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

InfoHeaderModal.propTypes = {
    foto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    musica: PropTypes.string.isRequired
}

InfoHeaderModal.defaultProps = {
    foto: <img src={FtDefault} alt='Desconhecido'/>,
    nome: 'Desconhecido',
    musica: 'Gosto de todas'
}

InfoBodyModal.propTypes = {
    idade: PropTypes.number.isRequired,
    hobbie: PropTypes.string.isRequired,
    profissao: PropTypes.string.isRequired,
    nomePets: PropTypes.string.isRequired,
    esPets: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired 
}

InfoBodyModal.defaultProps = {
    idade: 0,
    hobbie: 'Não tenho hobbie',
    profissao: 'Não trabalho',
    nomePets: '--',
    desc: "",
    esPets: ""
}

export {Info, InfoBodyModal, InfoHeaderModal};