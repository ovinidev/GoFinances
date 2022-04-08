import {
  Container,
  Date,
  Icon,
  Title,
  Value,
  ValueContainer
} from "./styles";

import { theme } from '../../global/styles/theme';

type CardProps = {
  title: string,
  value: string,
  date: string,
  type: 'up' | 'down' | 'total'
}

const name = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

const color = {
  up: theme.colors.green,
  down: theme.colors.red,
  total: theme.colors.white
}

export const Card = ({ title, value, date, type }: CardProps) => {

  return (
    <Container type={type}>
      <Title type={type}>{title}</Title>
      <ValueContainer>
        <Value color={color[type]}>R$ {value}</Value>
        <Date type={type}>Última {title.toLowerCase()} dia {date}</Date>
      </ValueContainer>
      <Icon name={name[type]} color={color[type]} />
    </Container>
  )
}