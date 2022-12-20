import { Text, Pressable } from 'react-native';

export default function Button({onTap}){

  return (
    <Pressable onPress={onTap} className="py-2 px-4 mt-14 bg-[#F2DEBA] border-none rounded-lg">
      <Text className="text-primaryColor text-lg font-black">Get started</Text>
    </Pressable>
  )
}
