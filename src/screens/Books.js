import { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, DrawerActions } from '@react-navigation/native';

import Title from '../components/common/Title';
import BooksList from '../components/books/BooksList';

import { getBooks } from '../../api/v1/Book'

export default function Books(){
  const navigation = useNavigation();
  const [currentBooks, setCurrentBooks] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All books',
      headerRight: () => {
        return <Pressable onPress={() => {navigation.dispatch(DrawerActions.openDrawer())}}>
          <Text className="mr-5 text-white text-lg font-bold">Menu</Text>
        </Pressable>
      },
      headerLeft: false
    })
  })

  useEffect(() => {
    navigation.addListener('focus', () => {
      getBooks().then(books => setCurrentBooks(books));
    })
  }, [])

  return(
    <SafeAreaView className="flex-1 bg-secondaryColor">
      <Title title="Bookstore" />
      <BooksList books={currentBooks} />
      <StatusBar style="light" />
    </SafeAreaView>
  )
}
