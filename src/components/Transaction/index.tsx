import {
  Container,
  Date,
  Icon,
  Title,
  Type,
  TypeContainer,
  Value
} from "./styles"

type TransactionProps = {
  id?: string,
  title: string,
  value: number,
  date: string,
  category: {
    name: string,
    icon: string
  }
}

export const Transaction = ({title, value, category, date}: TransactionProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value amount={value}>{value}</Value>
      <TypeContainer>
        <Icon name={category.icon} />
        <Type>{category.name}</Type>
        <Date>{date}</Date>
      </TypeContainer>
    </Container>
  )
}