import {FiSearch} from 'react-icons/fi'
import { Container } from "./styles";
import Menu from '../../assets/Menu.svg'
import Logo from '../../assets/Polygon 1.svg'
import Logoff from '../../assets/SignOut.svg'
import Close from '../../assets/Close.svg'
import Pedidos from '../../assets/Receipt.svg'
import {Input} from '../Input'
import {Button} from '../Button'
import {useAuth} from '../../hooks/auth'

export function Header(){
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
                    </div>

                    <div className='pedido'>
                        <img src={Pedidos} alt="" />    
                            <p>3</p>    
                    </div>
                </div>
            
            <div className="nav-elements-desktop some">

                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>food explorer</h2>
                    </div>

                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <Button icon={Menu} title="Pedido(0)" className="btn-pedido"/>

                    <div>
                        <img src={Logoff} alt="" onClick={signOut}/>
                    </div>
            </div>
        
        </Container>
    )

    function abreMenu(event){
       window.location.href = "/menu"
      
        
    }

    function FechaMenu(event){

    }
}