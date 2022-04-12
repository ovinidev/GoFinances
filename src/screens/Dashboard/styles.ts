import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, FlatListProps } from 'react-native';
import { TransactionProps } from '.';

export const Container = styled.View`
  ${({ theme }) => css`
  flex: 1;
  background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;
    background: ${theme.colors.primary};
  `}
`;

export const Profile = styled.View`
  ${({ theme }) => css`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  `}
`

export const Avatar = styled.Image`
  ${({ theme }) => css`
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    border-radius: 10px;
  `}
`

export const User = styled.View`
  ${({ theme }) => css`
  margin-left: 17px;
  `}
`

export const Welcome = styled.Text`
  ${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
  `}
`

export const Name = styled.Text`
  ${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};
  margin-top: -8px;
  `}
`

export const PowerOff = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.secondary};
    margin-left: auto;
  `}
`

export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 }
})`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    top: ${RFPercentage(20)}px;
  `};
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  margin: 0 0 ${RFValue(12)}px ${RFValue(24)}px;
`

export const Transactions = styled.View`
  margin-top: ${RFPercentage(40)}px;
  padding: 0 ${RFValue(24)}px;
`

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<TransactionProps>) => FlatList<TransactionProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
})`
`