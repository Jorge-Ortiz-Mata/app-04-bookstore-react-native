import { SafeAreaView, View, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';

import { postBook } from '../../api/v1/Book';

import Title from '../components/common/Title';
import CustomTextLabel from '../components/create_book/CustomTextLabel';
import CustomTextInput from '../components/create_book/CustomTextInput';
import SubmitButton from '../components/create_book/SubmitButton';

const showAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [{title: 'Accept', onPress: () => {console.log('Accepted')}}]
  )
}

export default function CreateBookScreen(){
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Create Book'
    })
  }, [navigation]);

  function saveName(value){
    setName(value)
  }

  function saveAuthor(value){
    setAuthor(value)
  }

  function savePrice(value){
    setPrice(value)
  }

  function sendData(){
    if(!name ||!author ||!price){
      showAlert('One or many fields are empty', 'Please, validate that all the fields were filled in correctly (title, author, price).')
      return;
    } else {
      const params = {name: name, author: author, price: price};
      postBook(params).then(book => showAlert(
        'The book was successfully created.',
        `Details: ${book.name}, ${book.author}, ${book.price}`
      ));
      setName('')
      setAuthor('')
      setPrice('')
      navigation.navigate('Books')
    }
  }

  return(
    <SafeAreaView className="flex-1 bg-secondaryColor">
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}} behavior='position'>
          <Title title="Create Book" />
          <Text className="font-medium text-center mx-5">You will create a new book by filling in this form</Text>
          <Text className="font-medium text-center mb-5 mx-5">For more information, please ask the administrators about your question.</Text>
            <View className="p-2 m-2 rounded-lg">
              <View className="my-2">
                <CustomTextLabel label="Book's title:" />
                <CustomTextInput sendValue={saveName} type="default" value={name} />
              </View>
              <View className="my-2">
                <CustomTextLabel label="Book's author:" />
                <CustomTextInput sendValue={saveAuthor} type="default" value={author} />
              </View>
              <View className="my-2">
                <CustomTextLabel label="Book's price:" />
                <CustomTextInput sendValue={savePrice} type="numeric" value={price} />
              </View>
              <View className="my-2 items-center">
                <SubmitButton title="Create Book" callAction={sendData} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}
