import { useState } from 'react';
import { TextInput } from 'react-native';

export default function CustomTextInput({sendValue, type, value}){

  function getInputValue(value){
    sendValue(value);
  }

  return(
    <TextInput
      className="bg-white rounded py-1 px-2 my-2"
      autoComplete='off'
      onChangeText={getInputValue}
      keyboardType={type}
      value={value}
    />
  )
}
