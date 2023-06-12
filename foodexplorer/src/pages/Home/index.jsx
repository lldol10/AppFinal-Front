import {Header} from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./styles"


export function Home(){
    return (
        <Container>
            <Header onclick={onclick}/>
            <Banner>
            </Banner>
        </Container>
    )
}

