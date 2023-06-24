import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #1E1E1E;
    
    >header{
        height: 11rem;
        width: 100%;
        
        display: flex;
        gap: 1.5rem;
        align-items: center;
        padding: 3rem 3rem 0rem;

       button{
        background-color: transparent;
        border:none ;
       }
    }

    >div{
        
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: start;
        margin: 3.6rem 2rem 0 2rem;
        
        width: 60%;

        button{
            margin-bottom: 1rem;
            font-size: 2rem;
            
        }
    }
`