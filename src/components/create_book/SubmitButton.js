import { Text, Pressable } from 'react-native';

export default function SubmitButton({title, callAction}){

  return(
    <Pressable className="bg-green py-2 px-4 rounded-lg" onPress={callAction}>
      <Text className="text-white font-bold text-lg">{title}</Text>
    </Pressable>
  )
}
