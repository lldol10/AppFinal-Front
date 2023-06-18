import {Header} from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import {Card} from '../../components/Card'

import {Container} from './styles'


export function Home(){
    return (
        <Container>
            <Header onclick={onclick}/>
            <Banner/>
            <Session title='Refeições'>
                <div className="carrossel">
                     <Card />
                     <Card />
                     <Card />
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

