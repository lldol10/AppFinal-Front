import styled from 'styled-components'

export const Container = styled.div`

height: 100vh;
width: 100vw;
background-color: #000a0f;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


.content{
    height: 67rem;
    width: 90%;
    padding: 4rem 7rem;
    margin: 0 auto;

    h1{
        margin: 2rem 0 3rem;
    }

    select{
        background-color:  #0d161b;
        border: none;
        height: 3rem;
    }
}

.input-area{
 
    display: flex;
    gap: 1rem;
    flex-direction: column;
    
    margin-bottom: 3rem;

    > p, label{
        font-size: 1.6rem;
    }

    >input{
        background-color:  #0d161b;
        border: none;
        height: 1.8rem;
        border-radius: 4px;
        padding: 1.5rem;
    }

    .flexivel{
        display: flex;
        align-items: center;
        gap: 1rem;

        > svg{
            font-size: 2rem;
        }

        >input{
            display: none;
        }

    }

    .ingredientes{
        
        min-height: 4rem;
        background-color: blue;
        display: flex;
    
        span{
        font-size: 1.4rem;
    }
    }
}



        /*MEDIA QUERIES */
        @media (min-width: 1024px) {
            .content{
                display: flex;
                width: 100%;
                margin: 0 auto;
                padding: 8rem 15rem;
                gap: 12rem;
                overflow-x: hidden;
            }

}

`