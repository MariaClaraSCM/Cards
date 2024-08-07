import PropTypes from 'prop-types';

export default function Info({foto, nome, idade, hobbie, profissao, formacao, esPets, nomePets, txtPets, musica}){
    return(
        <div className='list'>
            <img src={foto}/>
            <li>{nome} - {idade} Anos</li>
            <li>{hobbie}</li>
            <li>{profissao}</li>
            <li>{formacao}</li>
            <li>{esPets} - {nomePets}</li>
            <li>{txtPets}</li>
            <li>{musica}</li>
        </div>
    )
}

Info.propTypes = {
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

Info.defaultProps = {
    foto: Image,
    nome: 'Desconhecido',
    idade: 0,
    hobbie: 'Não tenho hobbie',
    profissao: 'Não trabalho',
    formacao: 'Não sou formado em nada',
    esPets: 'Não tenho nenhum animal',
    nomePets: '--',
    txtPets: '--',
    musica: 'Gosto de todas'
}