import { FlatList } from 'react-native';
import Book from './Book';

export default function BooksList({books}){

  return(
    <FlatList
      data={books}
      keyExtractor={(book) => book.id}
      renderItem={(bookData) => { return <Book book={bookData.item} /> } }
    />
  )
}
