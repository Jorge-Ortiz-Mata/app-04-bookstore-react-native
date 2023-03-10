import {RAILS_API_URL} from '@env'
// ---------- Books Index --------------
export async function getBooks(){
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

  const response = await fetch(`${RAILS_API_URL}/api/v1/books`, requestOptions)
  const books = await response.json();
  return books;
}

// ---------- Get Favorite Books --------------
export async function favoriteBooks(){
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }

  const response = await fetch(`${RAILS_API_URL}/api/v1/favorite/books`, requestOptions)
  const books = await response.json();
  return books;
}
// ---------- Books Create ---------------
export async function postBook(params){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({book: params})
  }

  const response = await fetch(`${RAILS_API_URL}/api/v1/books`, requestOptions)
  const bookCreated = await response.json();
  return bookCreated;
}

// ---------- Books Show ---------------

export async function getBook(id){
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch(`${RAILS_API_URL}/api/v1/books/${id}`, requestOptions)
  const book = await response.json();
  return book;
}

// ----------- Book Update -------------------

export async function updateBook(id, params){
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({book: params}),
  }
  const response = await fetch(`${RAILS_API_URL}/api/v1/books/${id}`, requestOptions)
  const book = await response.json();
  return book;
}

// ----------- Book Delete -------------------

export async function destroyBook(id){
  const requestOptions = {
    method: 'DELETE',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`${RAILS_API_URL}/api/v1/books/${id}`, requestOptions)
}
