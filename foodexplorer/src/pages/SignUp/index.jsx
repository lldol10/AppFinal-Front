import {Container} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import Logo from '../../assets/Polygon 1.svg'



export  function SignUp(){

  return (
    <Container>
      <main>
        
        <div className='titulo'>
          <img src={Logo} alt="logo do explorer" />
          <h1>food explorer</h1>
        </div>

        <section>
            <h1>Crie sua conta</h1>

            <div className='group'>
            <label htmlFor="email">Seu nome</label>
            <Input 
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id="email" 
            />
            </div>

            <div className='group'>
            <label htmlFor="email">Email</label>
            <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            id="email" 
            />
            </div>

            <div className='group'>
            <label htmlFor="pass">Senha</label>
            <Input 
            placeholder="No minimo 6 caracteres"
            type="password" 
            id="pass"
            />
            </div>

            <Button title="Criar conta" />

            <ButtonText title="Já tenho uma conta"/>
        </section>

      </main>
    </Container>
    
  )

}