import React from 'react';
import './App.css';
import LibraryItem from './Components/LibraryItem';

class App extends React.Component {

  constructor (props){
    super (props);

    this.state = {
      title:'',
      author:'',
      users: [],
    };

    this.handleTitleChange = this.handleTitleChange.bind (this);
    this.handleAuthorChange = this.handleAuthorChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
  }

  handleTitleChange (param) {
    this.setState ({title: param.target.value});
  }

  handleAuthorChange (param) {
    this.setState ({author: param.target.value});
  }

  handleSubmit (param) {
    param.preventDefault();
    let newUser = {title:this.state.title, author:this.state.author};
    this.setState ({users: [...this.state.users, newUser]})
  }

  render (){
    return (
      <div>
        <div>
          <form onSubmit= {this.handleSubmit}>
            <input 
            type='text' 
            placeholder='Title' 
            value= {this.state.title} 
            onChange= {this.handleTitleChange} 
            />

            <br />

            <input 
            type='text' 
            placeholder='Author' 
            value= {this.state.author} 
            onChange= {this.handleAuthorChange} 
            />

            <br />

            <button>Submit</button>
          </form>
        </div>

        <div>
          <h3>LIST OF USERS</h3>
          {this.state.users.map((user, index) => (
            <LibraryItem key= {index} title= {user.title} author= {user.author} />
          ))}
        </div>
      </div>
    )
  }

}
export default App;
