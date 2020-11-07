// API key=AIzaSyDjD_8SrWamB5rRUl-umwzlnNUCR1xXf1o

// 

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logging from './Logging'
import Register from './Register'
import Main from './Main'
import Cart from './Cart'
import UserPanel from './UserPanel'
import Books from './Books'

import '../css/App.css';

class App extends Component {
  state = {
    users: null,
    actualUser: {email: "a", password: "a", books: [{
      "kind": "books#volume",
      "id": "gK98gXR8onwC",
      "etag": "CQ/NiHVOwa8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
      "volumeInfo": {
        "title": "Flowers for Algernon",
        "subtitle": "A One-act Play",
        "authors": [
          "David Rogers",
          "Daniel Keyes"
        ],
        "publisher": "Dramatic Publishing",
        "publishedDate": "1969",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0871293870"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780871293879"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 32,
        "printType": "BOOK",
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.pl/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.pl/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
      },
      "saleInfo": {
        "country": "PL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "PL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "<b>FLOWERS</b> FOR ALGERNON A One - act Play For Four Men And One Woman * <br>\nCHARACTERS DR . STRAUSS a young neurosurgeon PROFESSOR NEMUR ... <br>\nhis older colleague ALICE KINNLAN ... a young , dedicated teacher BURT&nbsp;..."
      }
    }],cart: [{
        "kind": "books#volume",
        "id": "gK98gXR8onwC",
        "etag": "CQ/NiHVOwa8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
        "volumeInfo": {
          "title": "Flowers for Algernon",
          "subtitle": "A One-act Play",
          "authors": [
            "David Rogers",
            "Daniel Keyes"
          ],
          "publisher": "Dramatic Publishing",
          "publishedDate": "1969",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0871293870"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780871293879"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 32,
          "printType": "BOOK",
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.pl/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.pl/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
        },
        "saleInfo": {
          "country": "PL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "PL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "<b>FLOWERS</b> FOR ALGERNON A One - act Play For Four Men And One Woman * <br>\nCHARACTERS DR . STRAUSS a young neurosurgeon PROFESSOR NEMUR ... <br>\nhis older colleague ALICE KINNLAN ... a young , dedicated teacher BURT&nbsp;..."
        }
      }, {
        "kind": "books#volume",
        "id": "gK98gXR8onwC",
        "etag": "CQ/NiHVOwa8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC",
        "volumeInfo": {
          "title": "Flowers for Algernon",
          "subtitle": "A One-act Play",
          "authors": [
            "David Rogers",
            "Daniel Keyes"
          ],
          "publisher": "Dramatic Publishing",
          "publishedDate": "1969",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0871293870"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780871293879"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 32,
          "printType": "BOOK",
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.2.0.preview.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=gK98gXR8onwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.pl/books?id=gK98gXR8onwC&pg=PA3&dq=flowers+inauthor:keyes&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.pl/books?id=gK98gXR8onwC&dq=flowers+inauthor:keyes&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Flowers_for_Algernon.html?hl=&id=gK98gXR8onwC"
        },
        "saleInfo": {
          "country": "PL",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "PL",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=gK98gXR8onwC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "<b>FLOWERS</b> FOR ALGERNON A One - act Play For Four Men And One Woman * <br>\nCHARACTERS DR . STRAUSS a young neurosurgeon PROFESSOR NEMUR ... <br>\nhis older colleague ALICE KINNLAN ... a young , dedicated teacher BURT&nbsp;..."
        }
      },], cash: 500},
  }

  setActualUser = (newActualUser) => {
    console.log(newActualUser);
    this.setState({
      actualUser: newActualUser,
    })
  }

  addUsers = (newUser) => {
    const newUsers = [...this.state.users, newUser];

    localStorage.setItem(`user${localStorage.length}`, newUser);

    this.setState({
      users: newUsers,
    })
  }

  fetchUsers = () => {
    const users = [];

    for(let i = 0; i < localStorage.length; i++){
        users.push(localStorage.getItem(`user${i}`));
    }

    this.setState({
      users,
    })
  }

  componentDidMount(){
    this.fetchUsers();
  }

  render(){
    const { users, actualUser } = this.state;

    console.log(actualUser);

    return (
      <Router>
          <Route path="/" exact component={() => <Logging users={users} setActualUser={this.setActualUser}/>}/>
          <Route path="/register" component={() => <Register addUsers={this.addUsers} users={users} setActualUser={this.setActualUser}/>}/>   
          <Route path="/main" exact component={() => <Main actualUser={actualUser} setActualUser={this.setActualUser}/>}/>
          <Route path="/cart" exact component={() => <Cart actualUser={actualUser} setActualUser={this.setActualUser}/>}/>
          <Route path="/userPanel" exact component={() => <UserPanel actualUser={actualUser} setActualUser={this.setActualUser}/>}/>
          <Route path="/books" exact component={() => <Books actualUser={actualUser}/>}/>      
      </Router>
    )
  }
}

export default App;
