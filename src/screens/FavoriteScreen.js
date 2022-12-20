import { useLayoutEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { favoriteBooks } from '../../api/v1/Book';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/common/Title';
import BooksList from '../components/books/BooksList';

export default function FavoriteScreen(){
  const navigation = useNavigation();
  const [books, setFavoriteBooks] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Favorite Books',
    })
  })

  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      favoriteBooks().then(books => setFavoriteBooks(books));
    })
  }, [])

  return(
    <SafeAreaView className="flex-1 bg-secondaryColor">
      <View>
        <Title title="My favorite Books" />
        <BooksList books={books} />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}
