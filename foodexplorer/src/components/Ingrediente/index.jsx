import {FiX, FiPlus} from 'react-icons/fi'


import { Container} from "./styles";

export function Ingrediente({isNew, title,onClick, ...rest}){
    return(
        <Container isNew ={isNew} >

            <div className='agrupar'>
            <span>
                {isNew ? 'Adicionar': title}
            </span>

            <button
            type='button'
            onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
            </div>

        </Container>
    )
}