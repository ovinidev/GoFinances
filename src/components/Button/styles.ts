import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({
})`
  ${({ theme }) => css`
    height: ${RFValue(56)}px;
    width: 100%;
    background-color: ${theme.colors.secondary};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.white};
  `}
`;
