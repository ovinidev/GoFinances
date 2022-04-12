import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
  flex: 1;
  background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
  background: ${theme.colors.primary};
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${theme.colors.white};
  margin-bottom: ${RFValue(12)}px;
  `}
`;

export const Form = styled.View`
  ${({ theme }) => css`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
  `}
`;

export const Fields = styled.View`
  ${({ theme }) => css`
  `}
`;

export const ButtonContainer = styled.View`
  ${({ theme }) => css`
  flex-direction: row;
  justify-content: space-between;
  `}
`;


