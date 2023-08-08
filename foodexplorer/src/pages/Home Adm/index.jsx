import { useState } from "react"

import {HeaderAdm} from "../../components/Header Adm"

import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import {CardAdm} from '../../components/Card Adm'
import {FiEdit} from 'react-icons/fi'
import {Container} from './styles'


export function HomeAdm(){
const  [pratos, setPratos] = useState([])
    return (
        <Container>
            <HeaderAdm onclick={onclick}/>
            <Banner/>
            <Session title='Refeições'>
                <div className="carrossel">
                     <CardAdm />
                </div>
            </Session>

            <Session title='Pratos Principais'>
                <div className="carrossel">
                    <CardAdm>
                                <img src="http://github.com/lldol10.png" alt="" />
                        <div className="favorito">
                            <FiEdit onClick={editaPrato}/>
                        </div>
                        <h2>Salada Ravanello</h2>
                        <p>Massa fresca com amor e alho poro.</p>
                        <h1>R$ 49,99</h1>
                    </CardAdm>
                </div>
            </Session>

        </Container>
    )
}

