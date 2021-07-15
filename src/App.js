import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Component } from 'react';

import book from './components/book';
import booklist from './components/booklist';

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
 
      <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Author</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" "/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Title</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">ISBN#</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>

  
<book/>
<booklist/>
     

    </div>
  );
}
}

export default App;
