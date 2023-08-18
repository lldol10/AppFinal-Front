import { useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import {FiEdit} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";


export function CardAdm({name, description, price, imagem, ...rest}){


    

    return (
        <Container {...rest}>
            <img src={imagem} alt="" />
            <div className="favorito">
                <FiEdit />
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h1>{price}</h1>

        </Container>
    )
}