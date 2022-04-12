import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Color = {
  title: 'Income' | 'Outcome',
  isActive: boolean
}

export const Container = styled(TouchableOpacity) <Color>`
  height: ${RFValue(56)}px;
  width: ${RFValue(152)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  margin: ${RFValue(8)}px 0 ${RFValue(16)}px 0;

  ${({ isActive, title }) => isActive && title === 'Income' && css`
    background-color: #C9FFE2;
    border-color: transparent;
  `};

  ${({ isActive, title }) => isActive && title === 'Outcome' && css`
    background-color: #FEBDC8;
    border-color: transparent;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(14)}px;
  `}
`;

export const Icon = styled(Feather)`
${({ theme }) => css`
  font-size: ${RFValue(24)}px;
  `}
` 