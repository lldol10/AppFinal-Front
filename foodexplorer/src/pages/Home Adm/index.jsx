import {HeaderAdm} from "../../components/Header Adm"
import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import {CardAdm} from '../../components/Card Adm'

import {Container} from './styles'


export function HomeAdm(){
    return (
        <Container>
            <HeaderAdm onclick={onclick}/>
            <Banner/>
            <Session title='Refeições'>
                <div className="carrossel">
                     <CardAdm />
                     <CardAdm />
                     <CardAdm />
                </div>
            </Session>

            <Session title='Pratos Principais'>
                <div className="carrossel">
                     <CardAdm />
                     <CardAdm />
                     <CardAdm />
                </div>
            </Session>

        </Container>
    )
}

