import { useState } from "react";

import { Container } from "./styles";
import {FiEdit} from 'react-icons/fi'


export function CardAdm(){
    

    return (
        <Container>
            <img src="http://github.com/lldol10.png" alt="" />
            <div className="favorito">
                <FiEdit/>
            </div>
            <h2>Salada Ravanello</h2>
            <p>Massa fresca com amor e alho poro.</p>
            <h1>R$ 49,99</h1>

        </Container>
    )
}