import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    margin-right: ${RFValue(15)}px;
  `}
`

export const Name = styled.Text`
  ${({ theme }) => css`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  `};
`;

type Props = {
  isActive: boolean
}

export const CategoryItem = styled.TouchableOpacity<Props>`
  ${({ theme, isActive }) => css`
  width: 100%;
  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  background: ${isActive ? '#F7B888' : 'transparent'};
  `}
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
  padding: ${RFValue(24)}px;
  `}
`;
