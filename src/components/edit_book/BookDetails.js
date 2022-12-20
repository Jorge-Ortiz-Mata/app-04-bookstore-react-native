import { View, Text } from "react-native";

export default function BookDetails({book}){

  return(
    <View className="p-5 m-5 bg-white rounded-2xl">
      <Text className="font-bold text-center text-xl my-2">{book.name}</Text>
      <Text className="font-bold text-center">{book.author}</Text>
      <Text className="font-bold text-center my-1">${ parseFloat(book.price).toFixed(2) } USD</Text>
      <Text className="font-bold text-center my-2">{book.description}</Text>
    </View>
  )
}
