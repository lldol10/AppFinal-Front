import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import SaladaRavanello from './../../assets/image 2.png'

export function NovoPrato(){
    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        
                     <ButtonText title="< voltar" />
                     <h1>Novo Prato</h1>
                     <div className="input-area">
                        <p>Imagem do prato</p>
                        <label className="flexivel" htmlFor="imagem">                         
                        <FiDownload/>
                        <input id="imagem" type="file" /> 
                        <p>Selecione imagem</p>
                        </label>  
                     </div>

                     <div className="input-area">
                        <label htmlFor="prato">Nome</label>
                        <input id="prato" type="text" placeholder="Ex: Nome do prato"/>
                     </div>

                     <div className="input-area">
                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria" type="option" > 
                            <option value="refeicao">Refeição</option>
                            <option value="sobremessa">Sobremessa</option>
                        </select>
                     </div>

                     <div className="input-area">
                        <label htmlFor="ingredientes">Ingredientes</label>
                        <input id="ingredientes" type="text" placeholder="Ex: Nome do prato"/>
                     </div>
                                         
                    </div>

                <Rodape/>
                </Container>       
        </>

    )
}