import styled from 'styled-components'

export const Container = styled.div`
    
    height: 100vh;

    >main{
        
        width: 80%;
        padding: 1.6rem;
        margin: 15rem auto;
        text-align: center;

    .titulo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 7.3rem;
    font-size: 1.8rem;
    font-weight: 700;
    }

  

    .group{
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: start;
        font-size: 1.6rem;
        margin-top: 1.2rem;
    }

   

    button{
        margin-bottom: 2rem;
    }

    section h1{
        display: none;
    }
   
    }


    /*MEDIA QUERIES */

    @media (min-width: 1024px) {
        >main {

            display: flex;
            gap: 16rem;
            flex-wrap: wrap;
            border: 1px solid yellow;
            align-items: center;
            justify-content: space-around;
            width: 100%;

            h1{
                font-family: 'Poppins', sans-serif;
                font-size: 2rem;
                font-weight: 500;
            }
            
            
            

            >section {
                min-width: 47rem;
                background-color:#001119;
                border-radius: 1.6rem;
                padding: 6rem;
                border: 1px solid red;
                
                >div:nth-child(2){
                    margin-top: 2.5rem;
                }

                h1{
                    display: block;
                }

            
             }



             .titulo{
                border: 1px solid blue;
                img{
                    width: 4.5rem;
                }

                h1{
                    font-size: 4rem;
                    
                    font-weight: 700;
                }
             }

             

            

            
        }
    }

`