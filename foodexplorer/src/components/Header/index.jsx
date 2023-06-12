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

            {/* <div className="content">
            <img className="menu-mobile" src={Menu} alt="" onClick={e => handleButton(e)} />

            <div className="logo">
                <img src={Logo} alt="" />
                <h2>food explorer</h2>
            </div>

            <div className="open">
            <div className="nav-elements-desktop">
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <Button icon={Menu} title="Pedido(0)" className="btn-pedido"/>
            </div>

            </div>
            
            <div className="pedido">
                <img className="some" src={Pedidos} alt="" />
                <img className="aparece" src={Logoff} alt="" />
                <div className="item-number">3</div>
            </div>

            
            </div> */}
                <div className='header-mobile none' onClick={(e) => abreMenu() }>
                    <div>
                          <img src={Menu} alt="" />
                    </div>
                    

                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>food explorer</h2>
                    </div>



                    <div>
                        <img src={Pedidos} alt="" />
                    </div>

                </div>

                
            <div className="nav-elements-desktop">

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

            


                <div className='showMenu some'>
                    <div className='popup-menu'>
                          <img src={Close} alt="" onClick={(e) => FechaMenu()} />
                          <h2>Menu</h2>
                    </div>
                </div>


                     

                
            
        </Container>
    )

    function abreMenu(event){
        document.querySelector('.header-mobile').classList.add('some')
        document.querySelector('.showMenu').classList.remove('some')
      
        
    }

    function FechaMenu(event){
        document.querySelector('.header-mobile').classList.remove('some')
        document.querySelector('.showMenu').classList.add('some')
      
        
    }
}