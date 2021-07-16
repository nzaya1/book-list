import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Component } from 'react';

import Book from './components/Book';
import BookList from './components/BookList';

class App extends Component {

  render() {
  return (
    <div className="containter card mt-4 p-4">
     
     <div className="text-center">
       <h1> BookList</h1>
     </div>
      
      <hr/>
      <div className="text-center">
        <h2> Add Book:</h2>
      </div>
 
      

  
<Book/>
<BookList/>
     

    </div>
  );
}
}

export default App;
