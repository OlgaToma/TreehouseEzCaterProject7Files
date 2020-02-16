import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Page404 from "./Components/Page404";
import Nav from "./Components/Nav";
import PhotoContainer from "./Components/PhotoContainer";
import apiKey from "./config.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      photos: [],
      loading: false
    };
  }
  
  // Set the page title
  componentDidMount() {
    document.title = "Flickr search results";
  }

  // Search function. Calls the Flickr API and then adds the results to the application state. This allows them to be used by the components.
  performSearch(searchText) {
    this.setState({loading:true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&sort=relevance&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({search: searchText});
        this.setState({photos: response.data.photos});
        this.setState({loading: false});
      });
  }

  render() {
    // Setup our page elements and default searches
    return (
      <Router>
        <div>        
          <Search onSearch={this.performSearch.bind(this)}/>
          <Nav onSearch={this.performSearch.bind(this)}/>
          <Switch>
            <Route path="/">
              <PhotoContainer data={this.state.photos} search={this.state.search} loading={this.state.loading}/>
            </Route>
            <Route exact path="/search/cats">
              <PhotoContainer data={this.state.photos} search={this.state.search} loading={this.state.loading}/>
            </Route>
            <Route exact path="/search/dogs">
              <PhotoContainer data={this.state.photos} search={this.state.search} loading={this.state.loading}/>
            </Route>
            <Route exact path="/search/elephants">
              <PhotoContainer data={this.state.photos} search={this.state.search} loading={this.state.loading}/>
            </Route> 
            <Route path="/search/:search">
              <PhotoContainer data={this.state.photos} search={this.state.search} loading={this.state.loading}/>
            </Route>            
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;