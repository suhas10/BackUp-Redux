import React from 'react';
import './App.css';
import Header from "./components/Header"
import PostFeed from "./components/PostsFeed"
import AddPost from "./components/AddPost";
import {Provider} from "react-redux"
import store from "./store/store";


function App() {
  return (
    <Provider store= {store}>
      <div className="App">      
          <Header />
          <AddPost/> <hr/>
          <PostFeed/>
      </div>
    </Provider>
  );
}

export default App;
