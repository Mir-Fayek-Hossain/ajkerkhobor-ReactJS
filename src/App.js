
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }
  render() {
    let headlines = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    return (
      <Router>
        <NavBar headlines={headlines} />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={this.setProgress} key="general" pageSize={5}  category="general" />}
          />
       
           {headlines.map((list) => {
            console.log(list);
            let listUrl = `/${list}`;
            return (
              <Route
              exact
                path={listUrl}
                element={
               
                <News 
                key={list} setProgress={this.setProgress} pageSize={5} category={list} />}
              />
            );
          })} 


        </Routes>
      </Router>
    );
  }
}