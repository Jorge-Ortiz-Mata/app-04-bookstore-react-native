import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Book({book}){
  const navigation = useNavigation();

  function goToBookScreen(){
    navigation.navigate('BookScreen', {id: book.id});
  }


  return(
    <Pressable className="mb-5 mx-5 rounded-lg" onPress={goToBookScreen}>
      <View className="p-5 bg-white rounded-lg">
        <Text className="font-bold text-xl mb-2">{book.name}</Text>
        <View className="flex-row">
          <Text className="text-sm">Author:</Text>
          <Text className="font-bold text-sm ml-1">{book.author}</Text>
        </View>
        <View className="flex-row">
          <Text className="text-sm">Price:</Text>
          <Text className="font-bold text-sm ml-1">${ parseFloat(book.price).toFixed(2) } USD</Text>
        </View>
      </View>
    </Pressable>
  )
}
