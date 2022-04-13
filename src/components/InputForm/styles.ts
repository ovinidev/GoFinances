import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  ${({ theme }) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  font-size: ${RFValue(14)}px;
  height: ${RFValue(56)}px;
  margin-bottom: ${RFValue(8)}px;
  padding-left: 16px;
  `}
`;
