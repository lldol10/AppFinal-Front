import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'

export function Menu(){
    return(
        <Container>
            <header>
                <button onClick={Gotomenu}>
                     <img src={Sair} alt="" />
                </button>
                
                <h2>Menu</h2>
            </header>
            
            <div>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <ButtonText title="Sair"/>
            </div>
            
        </Container>
    )

    function Gotomenu(){
        window.location.href = "/"
    }
}