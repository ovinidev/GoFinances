import { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Button';
import { ButtonInput } from '../../components/ButtonInput';
import { CategorySelect } from '../../components/CategorySelect';
import { Category } from '../../screens/Category';
import { Input } from '../../components/Input';
import {
  ButtonContainer,
  Container,
  Fields,
  Form,
  Header,
  Title,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  }

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
    icon: 'any'
  });
  
  const [modalOpen, setModalOpen] = useState(false);

  const openSelectCategory = () => {
    setModalOpen(true);
  }

  const closeSelectCategory = () => {
    setModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />
          <ButtonContainer>
            <ButtonInput
              title='Income'
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <ButtonInput
              title='Outcome'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </ButtonContainer>
          <CategorySelect
            title={category.name}
            onPress={openSelectCategory}
          />
        </Fields>

        <Button title='Enviar' />
      </Form>

      <Modal visible={modalOpen}>
        <Category
          category={category}
          setCategory={setCategory}
          closeSelectCategory={closeSelectCategory} />
      </Modal>

    </Container>
  )
}