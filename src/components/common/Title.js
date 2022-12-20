import { View, Text } from 'react-native';

export default function Title({title}){

  return(
    <View>
      <Text className="font-black text-3xl text-center my-5">{title}</Text>
    </View>
  )
}
