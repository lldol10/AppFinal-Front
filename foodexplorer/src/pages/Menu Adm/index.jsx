import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'

export function MenuAdm(){
    return(
        <Container>
            <header>
                <button>
                     <img src={Sair} alt="" />
                </button>
                
                <h2>Menu</h2>
            </header>
            
            <div>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <ButtonText title="Novo Prato"/>
                <ButtonText title="Sair"/>
            </div>
            
        </Container>
    )
}