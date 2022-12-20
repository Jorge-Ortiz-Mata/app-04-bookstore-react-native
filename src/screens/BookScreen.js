import { SafeAreaView, ScrollView, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { getBook } from '../../api/v1/Book';
import { updateBook } from '../../api/v1/Book';

export default function BookScreen({route}){
  const navigation = useNavigation();
  const id = route.params.id;
  const [book, setBook] = useState({});
  const [btnState, setBtnState] = useState(false)

  useEffect(() => {
    getBook(id).then(book => setBook(book));
  }, [navigation])

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
  })

  return(
    <SafeAreaView className="flex-1 p-10">
      <ScrollView>
        <Text className="font-bold text-3xl text-center mb-5">{book.name}</Text>
        <Text className="font-bold text-center">{book.author}</Text>
        <Text className="font-bold text-center">${ parseFloat(book.price).toFixed(2) } USD</Text>
        <Text className="font-bold text-center my-2">{book.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
