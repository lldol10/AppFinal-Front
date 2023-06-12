import {Container} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import Logo from '../../assets/Polygon 1.svg'



export  function SignIn(){

  return (
    <Container>
      <main>
        
        <div className='titulo'>
          <img src={Logo} alt="logo do explorer" />
          <h1>food explorer</h1>
        </div>

        <section>
            <h1>Faça seu Login</h1>
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

            <Button title="ENTRAR" />

            <ButtonText title="Criar uma Conta"/>
        </section>

      </main>
    </Container>
    
  )

}