import {FiSearch} from 'react-icons/fi'
import { Container } from "./styles";
import Menu from '../../assets/Menu.svg'
import Logo from '../../assets/Polygon 1.svg'
import Logoff from '../../assets/SignOut.svg'
import Close from '../../assets/Close.svg'
import Pedidos from '../../assets/Receipt.svg'
import {Input} from '../Input'
import {Button} from '../Button'

export function Header(){
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
                        <img src={Logoff} alt="" />
                    </div>
            </div>
        
        </Container>
    )

    function abreMenu(event){
        alert('será implementado o menu, em breve.')
      
        
    }

    function FechaMenu(event){

    }
}