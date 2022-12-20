import { ScrollView, SafeAreaView, View, Image, Text } from 'react-native';
import Title from '../components/common/Title';

export default function ProfileScreen(){

  return(
    <SafeAreaView className="flex-1 items-center bg-secondaryColor">
      <ScrollView>
        <View className="flex items-center mt-10 mb-2">
          <Image source={require('../../assets/jorge.png')} className="w-40 h-40 rounded-full" />
          <Text className="mt-3 text-2xl font-bold">Jorge Ortiz</Text>
        </View>
        <View className="flex items-center mb-2">
          <Text className="font-bold">Software engineer.</Text>
          <Text className="font-bold">Full stack | Ruby on Rails | React Native | Docker |</Text>
        </View>
        <View className="flex items-center my-5">
          <Text className="text-center">
            Hello! I'm Jorge.
            I'm a full stack engineer working with Ruby on Rails and React Native. I have more than 5 years of experience working with
            different programming languages. I started with C++ and Java. After a couple of years, I focused on Javascript and Ruby.
            I've developed severwal projects for clients located in The United States and Mexico.
            I like to teach, learn and play videogames a lot!
          </Text>
        </View>
        <View className="flex items-center">
          <Text className="font-bold text-lg mb-2">Contact me.</Text>
          <Text>ortiz.mata.jorge@gmail.com</Text>
          <Text>San Luis Potosí, S.L.P. México</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
