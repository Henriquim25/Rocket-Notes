import {FiPlus} from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {Section} from '../../components/Section';
import {Note} from '../../components/Note';
import {ButtonText} from '../../components/ButtonText';


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header>

      </Header>
      <Menu>
        <li><ButtonText title='Todos' isActive/></li>
        <li><ButtonText title='React'/></li>
        <li><ButtonText title='NodeJS'/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Content>
        <Section title ="Minhas notas">
          <Note data={{title:'React', tags:[{id:'1',name:'react'}]}}/>
        </Section>
      </Content>

      <NewNote to ='/new'>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}
