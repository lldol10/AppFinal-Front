import { Container } from "./styles";
import {FiPlus, FiMinus} from 'react-icons/fi'
import {Header} from './../../components/Header'
import {Button} from './../../components/Button'
import {Tag} from './../../components/Tag'
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import SaladaRavanello from './../../assets/image 2.png'

import {Link} from 'react-router-dom'

export function Prato(){
    return(
        <>
                <Header/>

                <Container>
                    <div className="content">
                        
                        <div className="dish">
                        <Link to="/"> ← Voltar</Link>
                            <img src={SaladaRavanello} alt="" />
                        </div>

                        <div className="second-coll">
                            <div className="dish-info">
                              <h2>Salada Ravanello</h2>
                              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                            </div>

                        <div className="tags">
                            <Tag title="Saladinha"/>
                            <Tag title="Tomatinho"/>
                            <Tag title="Cebola"/>
                            <Tag title="Cenoura"/>
                            <Tag title="Alface"/>
                        </div>

                        <div className="pedir">
                            <div className="quantidade">
                                <FiMinus />
                                    <h3>01</h3>
                                <FiPlus/>
                            </div>
                            <Button title="Pedir">
                                
                            </Button>
                        </div>
                        
                        </div>
                    
                    </div>

                <Rodape/>
                </Container>       
        </>

    )
}