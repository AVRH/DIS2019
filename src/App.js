import React from 'react';
import './App.css';
import Body from './components/body'
import GroupList from './components/GroupList'

const  App = (props) => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <p> Form a study group</p>
        </header>
      </div>
        <GroupList />
    </div>
    );
}

export default App;
