import { TouchableOpacityProps } from "react-native"
import { Category, Container, Icon } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export const CategorySelect = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  )
}