import { Card } from '../../components/Card';
import {
  Container,
  Header,
  Profile,
  Avatar,
  User,
  Welcome,
  Name,
  PowerOff,
  CardContainer
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{ uri: 'https://avatars.githubusercontent.com/u/62653539?v=4' }}
          />
          <User>
            <Welcome>Olá,</Welcome>
            <Name>Vini</Name>
          </User>
          <PowerOff name="power" />
        </Profile>
      </Header>

      <CardContainer>
        <Card
          title='Entrada'
          value={'1.255'}
          date='14 de abril'
          type='up'
        />
        <Card
          title='Saída'
          value={'1.355'}
          date='14 de abril'
          type='down'
        />
        <Card
          title='Total'
          value={'1.355'}
          date='14 de abril'
          type='total'
        />
      </CardContainer>
    </Container>
  )
}