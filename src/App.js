import React, { Component } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Post from './components/post'
import CreatePost from './components/createPost'

// AppComponent
class App extends Component {

  render() {
    return (
      <Router>
           <div className="App">
               <Navbar />
               <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/create" component={CreatePost} />
                    <Route path="/:post_id" component={Post} />
               </Switch>
           </div>
      </Router>
    )
  }
}

// Export For Render
export default App;
