import { useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import {FiEdit} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";


export function CardAdm({name, description, price,avatar, ...rest}){


    

    return (
        <Container {...rest}>
            <img src={avatar} alt="" />
            <div className="favorito">
                <FiEdit />
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h1>{price}</h1>

        </Container>
    )
}