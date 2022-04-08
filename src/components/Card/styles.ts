import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type CardProps = {
  color?: string,
  type?: 'up' | 'down' | 'total'
}

export const Container = styled.View<CardProps>`
${({theme, type}) => css`
  height: ${RFValue(200)}px;
  width: ${RFValue(300)}px;
  background: ${type === 'total' ? theme.colors.secondary : theme.colors.white};
  
  border-radius: 10px;
  margin-right: ${RFValue(24)}px;
  padding: ${RFValue(20)}px ${RFValue(20)}px ${RFValue(42)}px;
  justify-content: space-between;
  position: relative;
  `}
`

export const Title = styled.Text<CardProps>`
${({theme, type}) => css`
  font-size: ${RFValue(14)}px;
  color: ${type === 'total' ? theme.colors.white : theme.colors.title};
  font-family: ${theme.fonts.regular};
  `}
`
export const ValueContainer = styled.View`
${({theme}) => css`

  `}
`

export const Value = styled.Text<CardProps>`
${({theme, color}) => css`
  font-size: ${RFValue(32)}px;
  color: ${color};
  font-family: ${theme.fonts.medium};
  `}
`

export const Date = styled.Text<CardProps>`
${({theme, type}) => css`
  font-size: ${RFValue(12)}px;
  color: ${type === 'total' ? theme.colors.white : theme.colors.text};
  font-family: ${theme.fonts.regular};
  margin-top: -10px;
  `}
`

export const Icon = styled(Feather)`
${({theme}) => css`
  font-size: ${RFValue(33)}px;
  position: absolute;
  top: ${RFValue(20)}px;
  right: ${RFValue(20)}px;
  `}
` 