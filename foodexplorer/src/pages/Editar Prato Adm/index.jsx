import { Container } from "./styles";
import {FiDownload} from 'react-icons/fi'
import {HeaderAdm} from './../../components/Header Adm'
import { Button } from "../../components/Button";
import {Rodape} from './../../components/Rodape'
import {ButtonText} from './../../components/ButtonText'
import { Input } from "../../components/Input";
import { Ingrediente } from "../../components/Ingrediente";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";




export function EditarPrato(){
const [data, setData] = useState("")
const [tags, setTags] = useState([])
const [newTag, setNewTag] = useState([])

const params = useParams()
const navigate = useNavigate()

const [name, setName] = useState("")
const [description, setDescription] = useState("")
const element = document.querySelector('#categoria')


const [price, setPrice] = useState("")


function handleRemoveTag(deleted){
   setTags(prevState => prevState.filter(tag => tag !== deleted))
   
}

function handleAddTag(tagDeleted){
   setTags(prevState => [...prevState, newTag])
  setNewTag("")
  
}

async function alterarPrato(){

   navigate('/')
   const category = element.value
   await api.put(`/prato/${params.id}`, {
      name,
      description,
      category,
      price,
      tags
   })

   
   
}

async function deletedPrato() {
   const confirm = window.confirm("Deseja realmente excluir a nota?")

   if(confirm){
      await api.delete(`/prato/${params.id}`)
      navigate('/')
   }
}

useEffect(() => {
   async function fetchPrato(){
      const response = await api.get(`/prato/${params.id}`)
      setData(response.data)
      setTags(response.data.tags)
      console.log(tags)
      
   }

   fetchPrato()
}, [])

   
    return(
        <>
                <HeaderAdm/>

                <Container>
                    <div className="content">
                        
                     <ButtonText className="voltar" title="< voltar" />
                     
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
                           <Input id="prato" type="text" placeholder= {data.name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="input-area">
                           <label htmlFor="categoria">Categoria</label>
                           <select id="categoria" type="option" > 
                              <option value="Refeicao">Refeição</option>
                              <option value="Sobremessa">Sobremessa</option>
                           </select>
                        </div>
                        </div>

                        <div className="capsula">
                        <div className="input-area aumenta">
                           <p>Ingredientes</p>
                           {
                               tags &&
                               <div className="ingredientes">
                               {
                                  tags.map(tag => (
                                     <Ingrediente 
                                     key={String(tag.id)}
                                     title={tag.name}
                                     onClick={() => handleRemoveTag(tag)}
                                    
                                    />
                                  ))
                                 
                               }

                               <Ingrediente
                                title='avera'
                                 isNew
                                 value={newTag}
                                 onChange={e => setNewTag(e.target.value)}
                                 onClick={handleAddTag}
                                 />
                            </div>
                           }
                        </div>

                        <div className="input-area">
                           <label htmlFor="prato">Preço</label>
                           <Input id="prato" type="text" placeholder={data.price} onChange={e => setPrice(e.target.value)}/>
                        </div>
                        </div>


                        <div className="input-area">
                           <label htmlFor="prato">Descrição</label>
                           <textarea id="prato" type="text" placeholder={data.description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                    
                        <div className="btn-padrao">
                            <Button title="Excluir prato" onClick={() => deletedPrato()}/>              
                            <Button title="Salvar Alterações" onClick={() => alterarPrato()}/>
                        </div>
                     
                                   
                    </div>
                
                <Rodape/>
                </Container>       
        </>

    )
}