import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import { Button } from "../../components/Button";
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import { Input } from "../../components/Input";
import { Ingrediente } from "../../components/Ingrediente";


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
                        <Input id="prato" type="text" placeholder="Ex: Nome do prato"/>
                     </div>

                     <div className="input-area">
                        <label htmlFor="categoria">Categoria</label>
                        <select id="categoria" type="option" > 
                            <option value="refeicao">Refeição</option>
                            <option value="sobremessa">Sobremessa</option>
                        </select>
                     </div>

                     <div className="input-area">
                        <p>Ingredientes</p>
                        <div className="ingredientes">
                            <Ingrediente title='hoje tem em'  />
                            <Ingrediente title='LUAN'/>
                            <Ingrediente title='avera' isNew  />
                        </div>
                     </div>

                     <div className="input-area">
                        <label htmlFor="prato">Preço</label>
                        <Input id="prato" type="text" placeholder="R$ 00,00"/>
                     </div>

                     <div className="input-area">
                        <label htmlFor="prato">Descrição</label>
                        <textarea id="prato" type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composições"/>
                     </div>
                     
                     <Button title="Salvar Alterações"/>              
                    </div>
                
                <Rodape/>
                </Container>       
        </>

    )
}