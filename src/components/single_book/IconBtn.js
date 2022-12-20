import { Pressable, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function IconBtn({icon, color, onPressIcon}){

  return(
    <Pressable onPress={onPressIcon} className="mx-3">
      <View className="p-2 rounded-lg bg-white">
        <FontAwesome name={icon} size={20} color={color} />
      </View>
    </Pressable>
  )
}
