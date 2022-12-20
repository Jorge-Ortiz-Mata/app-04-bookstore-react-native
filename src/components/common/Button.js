import { Text, Pressable } from 'react-native';

export default function Button({onTap}){

  return (
    <Pressable onPress={onTap} className="py-2 px-4 mt-14 bg-[#EFF5F5] border-none rounded-lg">
      <Text className="text-primaryColor text-lg font-medium">Get started</Text>
    </Pressable>
  )
}
