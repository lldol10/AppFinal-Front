import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import { Button } from "../../components/Button";
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import { Input } from "../../components/Input";
import { Ingrediente } from "../../components/Ingrediente";



export function EditarPrato(){
   
    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        
                     <ButtonText className="voltar" title="< voltar" onClick={window.location.href="/"} />
                     
                     <h1>Editar Prato</h1>
                     <div className="capsula">
                        {/* <div className="input-area">
                           <p>Imagem do prato</p>
                           <label className="flexivel" htmlFor="imagem">                         
                           <FiDownload/>
                           <input id="imagem" type="file" /> 
                           <p>Selecione imagem</p>
                           </label>  
                        </div> */}

                        <div className="input-area aumenta">
                           <label htmlFor="imagem">Imagem do Prato</label>
                           <Input id="imagem" type="file"  icon={FiDownload}/>
                        </div>

                        <div className="input-area aumenta">
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
                        </div>

                        <div className="capsula">
                        <div className="input-area aumenta">
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
                        </div>


                        <div className="input-area">
                           <label htmlFor="prato">Descrição</label>
                           <textarea id="prato" type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composições"/>
                        </div>
                    
                        <div className="btn-padrao">
                            <Button title="Excluir prato"/>              
                            <Button title="Salvar Alterações"/>
                        </div>
                     
                                   
                    </div>
                
                <Rodape/>
                </Container>       
        </>

    )
}