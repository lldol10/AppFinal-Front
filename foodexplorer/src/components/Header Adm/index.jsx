import {FiSearch} from 'react-icons/fi'
import { Container } from "./styles";
import Menu from '../../assets/Menu.svg'
import Logo from '../../assets/Polygon 1.svg'
import Logoff from '../../assets/SignOut.svg'
import Close from '../../assets/Close.svg'
import Pedidos from '../../assets/Receipt.svg'
import {Input} from '../Input'
import {Button} from '../Button'
import { useAuth } from '../../hooks/auth'

export function HeaderAdm(){
    const {signOut} = useAuth()
    return(
        <Container>

                <div className='header-mobile' onClick={(e) => abreMenu() }>
                    <div>
                          <img src={Menu} alt="" />
                    </div>
                    
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>food explorer</h2>
                        <span>Adm</span>
                    </div>

                </div>
            
            <div className="nav-elements-desktop some">

                    <div className="logo">
                        <img src={Logo} alt="" />
                        <div className='adm'>
                            <h2>food explorer</h2>
                            <span>Adm</span>
                        </div>

                    </div>

                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <Button icon={Menu} title="Novo Prato" className="btn-pedido" />
                <img src={Logoff} alt=""  onClick={signOut}/>

 
            </div>
        
        </Container>
    )

    function abreMenu(event){
       window.location.href = '/menuadm'    
    }



    function FechaMenu(event){

    }
}