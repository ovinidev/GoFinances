import { TouchableOpacityProps } from "react-native"
import { theme } from "../../global/styles/theme"
import { Container, Icon, Title } from "./styles"

type Props = TouchableOpacityProps & {
  title: 'Income' | 'Outcome',
  isActive: boolean
}

const name = {
  Income: 'arrow-up-circle',
  Outcome: 'arrow-down-circle',
}

const color = {
  Income: theme.colors.green,
  Outcome: theme.colors.red,
}

export const ButtonInput = ({ title, isActive, ...rest }: Props) => {
  return (
    <Container title={title} isActive={isActive} {...rest}>
      <Icon name={name[title]} color={color[title]}/>
      <Title>{title}</Title>
    </Container>
  )
}