import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type ValueProps = {
  amount: number
}

export const Container = styled.View`
${({ theme }) => css`
  height: ${RFValue(128)}px;
  width: ${RFValue(327)}px;
  background: ${theme.colors.white};
  padding: ${RFValue(18)}px ${RFValue(24)}px ${RFValue(18)}px;
  margin-bottom: ${RFValue(16)}px;
`}
`

export const Title = styled.Text`
${({ theme }) => css`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.title};
  font-family: ${theme.fonts.regular};
`}
`

export const Value = styled.Text<ValueProps>`
${({ theme, amount }) => css`
  font-size: ${RFValue(20)}px;
  color: ${amount > 0 ? theme.colors.green : theme.colors.red};
  font-family: ${theme.fonts.medium};
`}
`

export const Type = styled.Text`
${({ theme }) => css`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.medium};
  margin-top: 2px;
  margin-left: ${RFValue(10)}px;
`}
`

export const Date = styled.Text`
${({ theme }) => css`
  margin-left: auto;
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.medium};
`}
`

export const Icon = styled(Feather)`
${({ theme }) => css`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.medium};
`}
`

export const TypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`
