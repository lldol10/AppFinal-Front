import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'
import {useAuth} from '../../hooks/auth'

export function Menu(){
    const {signOut} = useAuth()
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
                <ButtonText title="Sair" onClick={signOut}/>
            </div>
            
        </Container>
    )

    function Gotomenu(){
        window.location.href = "/"
    }
}