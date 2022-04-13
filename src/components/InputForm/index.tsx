import { TextInputProps } from "react-native"
import { Container } from "./styles"
import React from 'react';
import { Control, Controller } from "react-hook-form";

type Props = TextInputProps & {
  control: Control,
  name: string
}

export const InputForm = ({ control, name, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      render={({
        field: { onChange, value } }) => (
        <Container
          onChangeText={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  )
}