import { Container,Form,BackgroundImg } from "./styles";
import {  Link} from 'react-router-dom'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {FiMail,FiLock} from 'react-icons/fi';


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar links úteis</p>
        <h2>Faça seu Login</h2>
        <Input
          placeholder="E-mail"
          type ='text'
          icon = {FiMail}
        />
        <Input
          placeholder="Senha"
          type ='password'
          icon = {FiLock}
        />

        <Button title="Entrar"/>

        <Link to='/register'>
          Criar Conta
        </Link>
          
      </Form>

      <BackgroundImg/>
    </Container>
  )
}