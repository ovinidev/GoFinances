import { Card } from '../../components/Card';
import { Transaction } from '../../components/Transaction';
import {
  Container,
  Header,
  Profile,
  Avatar,
  User,
  Welcome,
  Name,
  PowerOff,
  CardContainer,
  TransactionList,
  Transactions,
} from './styles';

export interface TransactionProps {
  id: string,
  title: string,
  value: number,
  date: string,
  category: {
    name: string,
    icon: string
  }
}

export function Dashboard() {
  const transaction: TransactionProps[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      value: 12.500,
      date: '13/04/2020',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      }
    },
    {
      id: '2',
      title: 'Desenvolvimento de site',
      value: 12.500,
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '3',
      title: 'Desenvolvimento de site',
      value: 12.500,
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'shopping-bag'
      }
    },
    {
      id: '4',
      title: 'Desenvolvimento de site',
      value: 12.500,
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '5',
      title: 'Desenvolvimento de site',
      value: 12.500,
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    }
  ]

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

      <Transactions>
        <TransactionList
          data={transaction}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Transaction
              title={item.title}
              value={item.value}
              date={item.date}
              category={item.category}
            />
          }
        />
      </Transactions>

    </Container>
  )
}