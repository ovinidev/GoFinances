import { useState } from 'react';
import {
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { Button } from '../../components/Button';
import { ButtonInput } from '../../components/ButtonInput';
import { CategorySelect } from '../../components/CategorySelect';
import { Category } from '../../screens/Category';
import {
  ButtonContainer,
  Container,
  Fields,
  Form,
  Header,
  Title,
} from './styles';
import { InputForm } from '../../components/InputForm';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface FormData {
  name: string,
  amount: string,
  transactionType: string,
  category: string
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  amount: yup.number().positive().integer().required('Digite um número'),
}).required();

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

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleRegister = (form: any) => {
    if (!transactionType) return Alert.alert('Selecione o tipo de transição');

    if (category.key === 'category') return Alert.alert('Selecione a categoria');

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data);

  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              autoCorrect={false}
            />
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

          <Button
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={modalOpen}>
          <Category
            category={category}
            setCategory={setCategory}
            closeSelectCategory={closeSelectCategory} />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}