import { SafeAreaView, ScrollView, Text, Pressable, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useLayoutEffect, useState } from 'react';
import { getBook } from '../../api/v1/Book';
import { updateBook } from '../../api/v1/Book';
import IconBtn from '../components/single_book/IconBtn';

export default function BookScreen({route}){
  const navigation = useNavigation();
  const id = route.params.id;
  const [book, setBook] = useState({});
  const [btnState, setBtnState] = useState(false)

  useLayoutEffect(() => {
    getBook(id).then(book => setBook(book));
  }, [])

  function addToFavorites(){
    setBtnState(true);
    const params = {is_favorite: !book.is_favorite}
    updateBook(id, params).then(book => setBook(book));
    setBtnState(false);
  }

  navigation.setOptions({
    title: book.name,
    headerStyle: {
      backgroundColor: '#2C3639',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => {
      return <Pressable disabled={btnState} onPress={addToFavorites}>
        {
          book.is_favorite
          ? <FontAwesome name="star" size={24} color="white" />
          : <Feather name="star" size={24} color="white" />
        }
        </Pressable>
      }
  });

  function editBook(){
    console.log('Editing')
  }

  function deleteBook(){
    console.log('Deleting')
    Alert.alert(
      `Delete Book: ${book.name}`,
      'Are you sure you want to delete this book?',
      [
        { text: 'Yes', onPress: () => console.log('Deleted')},
        { text: 'No', onPress: () => console.log('Cancel')}
      ],
      {
        cancelable: true,
      })
  }

  return(
    <SafeAreaView className="flex-1 p-10 bg-secondaryColor">
      <ScrollView>
        <Text className="font-bold text-3xl text-center mb-5">{book.name}</Text>
        <Text className="font-bold text-center">{book.author}</Text>
        <Text className="font-bold text-center">${ parseFloat(book.price).toFixed(2) } USD</Text>
        <View className="flex-row items-center justify-center mt-3 mb-2">
          <IconBtn color="green" icon="pencil" onPressIcon={editBook} />
          <IconBtn color="red" icon="trash" onPressIcon={deleteBook} />
        </View>
        <Text className="font-bold text-center my-2">{book.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
