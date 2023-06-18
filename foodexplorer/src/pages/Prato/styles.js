import styled from 'styled-components'

export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: #1E1E1E;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin: 0 auto;

.content{
    height: 67rem;
    width: 31rem;
    margin: 0 auto;
    padding: 2rem 0;

    button:nth-child(1){
        font-size: 2.4rem;
    }
}

> button:nth-child(1){
    font-size: 2rem;
    padding: 2rem 0;
}

.dish{
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    font-size: 1.4rem;
    text-align: center;
    padding: 3rem;

    

    img{
        height: 18rem;
        width: 18rem;
    }

    h2{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-style: bold;
        
    }

}

.tags{
    min-height:5rem;
    padding: 1rem 4rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.pedir{
    display: flex;
    padding: 2rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

.quantidade{
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 2.2rem;
}
`