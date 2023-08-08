import Sair from '../../assets/Close.svg'
import {FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Container} from './styles'
import {useAuth} from '../../hooks/auth'
import { NovoPrato } from '../Novo Prato Adm'

export function MenuAdm(){


    function NovoPrato(){
        window.location.href = '/novoprato'
      
    }
    const {signOut} = useAuth()
    return(
        <Container>
            <header>
                <button>
                     <img src={Sair} alt="" onClick={signOut}/>
                </button>
                
                <h2>Menu</h2>
            </header>
            
            <div>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <ButtonText title="Novo Prato" onClick={NovoPrato} />
                <ButtonText title="Sair" onClick={signOut}/>
            </div>
            
        </Container>
    )
}