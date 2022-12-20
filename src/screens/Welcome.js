import { Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

import Button from '../components/common/Button';

export default function Welcome(){
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function changeScreen(){
    navigation.navigate('Drawer', {
      screen: 'Books'
    })
  }

  return(
    <SafeAreaView className="flex-1">
      <LinearGradient className="flex-1 justify-center items-center" colors={['#2C3639', '#3F4E4F']} >
        <Entypo name="book" size={80} color="#EFF5F5" />
        <Text className="text-secondaryColor my-5 text-4xl font-bold">¡The Bookstore App!</Text>
        <Text className="text-secondaryColor">React Native and Ruby on Rails 7</Text>
        <Text className="text-secondaryColor">Jorge Ortiz - 2022</Text>
        <Button onTap={changeScreen} />
        <StatusBar style="light" />
      </LinearGradient>
    </SafeAreaView>
  )
}
