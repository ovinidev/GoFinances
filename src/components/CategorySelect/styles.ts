import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity).attrs({
})`
  ${({ theme }) => css`
  background: ${theme.colors.white};
  height: ${RFValue(56)}px;
  margin-bottom: ${RFValue(8)}px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `}
`;

export const Category = styled.Text`
  ${({ theme }) => css`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
  `}
`;

export const Icon = styled(Feather)`
${({ theme }) => css`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text};
  `}
` 