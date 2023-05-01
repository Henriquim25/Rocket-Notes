import {RiShutDownLine} from 'react-icons/ri'
import { Container , Profile ,Logout} from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/henriquim25.png"
         alt="Foto do Usuario" />

         <div>
          <span>Bem-Vindo</span>
          <strong>Henrique Damasceno</strong>
         </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}