import styled from 'styled-components'
export const Container = styled.header`
    grid-area: header;
    height: 11rem ;
    width: 100%;
    border-bottom-width:1px;
    border-bottom-style: solid;
    
    display: flex;
    
    .logo{
        object-fit: cover;
        width: 29rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .header-mobile{
        width: 100%;
        display: flex;
        height: 3rem;
        
        align-items: center;
        justify-content: space-between;
        margin: 3rem 4rem 0;

        img{
            cursor: pointer;
        }
        
    }

    .popup-menu{
        display: flex;

        height: 3rem;
        gap: 1.6rem;
        align-items: center;
        justify-content: space-between;
        margin: 3rem 4rem 0;

        img{
            cursor: pointer;
        }
    }

    .nav-elements-desktop{
        background-color: red;
        width: 100%;
        display: flex;
        height: 5rem;
        gap: 3rem;
        margin: 2rem 4rem;
        justify-content: space-around;
        align-items: center;

        button{
            width: 20rem;
        }
    }

    

    .some{
        display: none;
    }




        /*MEDIA QUERIES */
        @media (max-width: 1024px) {
  
           .nav-elements-desktop{
            display: none;
            
           }

           @media (min-width: 1024px) {
  
        .header-mobile{
         display: block;
         }


    }
    
`