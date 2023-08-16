import { useEffect, useState } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import {HeaderAdm} from "../../components/Header Adm"

import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import {CardAdm} from '../../components/Card Adm'
import {FiEdit} from 'react-icons/fi'
import {Container} from './styles'

import { api } from "../../services/api"


export function HomeAdm(){
    const [pratos, setPratos] = useState([])

    const navigate = useNavigate()



    function handleEdit(id){
        
        navigate(`/editarprato/${id}`)
    }



    

    useEffect(() => {
        async function fetchPratos(){
            const meal = await api.get('/prato')
            setPratos(meal.data)
            
        }

        fetchPratos()
    }, [])

    return (
        <Container>
            <HeaderAdm onclick={onclick}/>
            <Banner/>
            <Session title='Refeições'>
                <div className="carrossel">
                     {
                        pratos.map(prato =>  {
                            if(prato.category == 'Refeicao'){
                                return (
                                    <CardAdm
                                    key={String(prato.id)}
                                    name={prato.name}
                                    description={prato.description}
                                    price={prato.price}
                                    onClick={() => handleEdit(prato.id)}
                                  />
                                )
  
                            }
                            
                          }                             
                          )
                     }
                </div>
            </Session>

            <Session title='Pratos Principais'>
                <div className="carrossel">
{                    
 pratos.map(prato =>  {
    if(prato.category == 'Sobremessa'){
        return (
            <CardAdm
            key={String(prato.id)}
            name={prato.name}
            description={prato.description}
            price={prato.price}
            onClick={() => handleEdit(prato.id)}
          />
        )

    }
    
  }                             
  )
}
                </div>
            </Session>

        </Container>
    )
}

