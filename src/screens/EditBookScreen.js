import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import Title from '../components/common/Title';
import CustomTextLabel from '../components/create_book/CustomTextLabel';
import CustomTextInput from '../components/create_book/CustomTextInput';
import SubmitButton from '../components/create_book/SubmitButton';
import { getBook } from '../../api/v1/Book';
import BookDetails from '../components/edit_book/BookDetails';
import { updateBook } from '../../api/v1/Book';

export default function EditBookScreen({route}){
  const navigation = useNavigation();
  const id = route.params.id;

  const [book, setBook] = useState({})

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('');

  useEffect(() => {
    getBook(id).then(book =>
      {
        setBook(book)
        setName(book.name)
        setAuthor(book.author)
        setPrice(parseFloat(book.price).toFixed(2))
        setDescription(book.description)
      }
    )
  }, [navigation])

  navigation.setOptions({
    title: book?.name,
    headerStyle: {
      backgroundColor: '#2C3639',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  function handleNameBook(name){
    setName(name)
  }

  function handleAuthorBook(author){
    setAuthor(author)
  }

  function handlePriceBook(price){
    setPrice(price)
  }

  function handleDescriptionBook(description){
    setDescription(description)
  }

  function sendData(){
    if(name == null || author == null || price == null || description == null){
      Alert.alert(
        'Missing params',
        'All fields are required.',
        [{text: 'Accept'}]
      )
    } else {
      const params = {
        name: name,
        author: author,
        price: price,
        description: description,
      }
      updateBook(id, params).then((response) => {
        console.log(response)
      })
      navigation.navigate('Books')

    }
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <KeyboardAvoidingView style={{height: 750}} behavior='padding'>
          <Title title="Edit Book" />
          <BookDetails book={book}/>
          <View className="p-2 m-2 rounded-lg">
            <View className="my-2">
              <CustomTextLabel label="Book's title:" />
              <CustomTextInput sendValue={handleNameBook} type="default" value={name} />
            </View>
            <View className="my-2">
              <CustomTextLabel label="Book's author:" />
              <CustomTextInput sendValue={handleAuthorBook} type="default" value={author} />
            </View>
            <View className="my-2">
              <CustomTextLabel label="Book's price:" />
              <CustomTextInput sendValue={handlePriceBook} type="numeric" value={price} />
            </View>
            <View className="my-2">
              <CustomTextLabel label="Book's description:" />
              <CustomTextInput sendValue={handleDescriptionBook} type="default" value={description} />
            </View>
            <View className="my-2 items-center">
              <SubmitButton title="Update Book" callAction={sendData} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}
