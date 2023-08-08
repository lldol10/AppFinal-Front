import {Header} from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import {Card} from '../../components/Card'
import { api } from "../../services/api"
import {Container} from './styles'
import { useEffect, useState } from "react"


export function Home(){
    const [pratos, setPratos] = useState([])

    async function fatchPratos(){
        const response = await api.get('/prato')
        console.log(response)
    }

fatchPratos()
   
    return (
        <Container>
            <Header onclick={onclick}/>
            <Banner/>
            <Session title='Refeições'>
                <div className="carrossel">
                    {/* {
                        pratos.map(prato => {
                            <Card
                             name={prato.name}
                             price={prato.price}
                             />
                        })
                    } */}
                    <Card
                             name={'arr0z'}
                             price={'prato.price'}
                             />
                  

                </div>
            </Session>

            <Session title='Pratos Principais'>
                <div className="carrossel">
                     <Card />
                     <Card />
                     <Card />
                </div>
            </Session>

        </Container>
    )
}

