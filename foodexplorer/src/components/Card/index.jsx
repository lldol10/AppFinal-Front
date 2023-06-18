import { useState } from "react";

import { Container } from "./styles";
import {FiPlus} from 'react-icons/fi'
import {FiMinus} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'

import {Button} from './../../components/Button'


export function Card(){
    
    const [total, setTotal] = useState(0)


    function add(){
        setTotal(prevState => prevState + 1)
    }

    function less(){
        if(total == 0){
            return
        }else{
            setTotal(prevState => prevState - 1)
        }
        
    }

    return (
        <Container>
            <img src="http://github.com/lldol10.png" alt="" />
            <div className="favorito">
                <FiHeart/>
            </div>
            <h2>Salada Ravanello</h2>
            <h1>R$ 49,99</h1>
            <div className="quantidade">
                <FiMinus onClick={less}/>
                <h2>{total}</h2>
                <FiPlus onClick={add}/>
            </div>
            <Button title="Incluir"/>

        </Container>
    )
}