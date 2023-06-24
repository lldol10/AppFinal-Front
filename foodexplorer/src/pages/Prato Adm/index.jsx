import { Container } from "./styles";
import {HeaderAdm} from './../../components/Header Adm'
import {Button} from './../../components/Button'
import {Tag} from './../../components/Tag'
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import SaladaRavanello from './../../assets/image 2.png'

export function PratoAdm(){
    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        <div className="dish">
                            <ButtonText title="< voltar" />
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

                            <Button title="Editar o Prato"/>
                                
                        </div>
                    
                    </div>

                <Rodape/>
                </Container>       
        </>

    )
}