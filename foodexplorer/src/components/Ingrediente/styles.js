import styled from 'styled-components'

export const Container = styled.div`

min-height: 1rem;
display: flex;
align-items: center;
padding: 8px;
font-size: 1.8rem;


input{
   background-color: transparent;
   border: none;
}

span, svg{
    color: white;
}

button{
    margin: none;
    border: none;
    background-color: transparent;

    svg{
        font-size: 2rem;
    }
}

.agrupar{
    background-color: ${(props) => props.isNew ? 'transparent' : '#918e8c'};
    border: ${(props) => props.isNew ? '2px dashed white' : 'none'};
    color: white;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    border-radius: 10px;
    padding: 5px 1rem;
}



        /*MEDIA QUERIES */
        @media (max-width: 564px) {
  
            .agrupar{
                flex-wrap: wrap;
            }
}

`