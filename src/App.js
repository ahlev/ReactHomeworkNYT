import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
// import Form from "./components/Form";
import { ResultList, ResultListItem } from "./components/ResultList";
import Input from "./components/Input";
import SaveButton from "./components/SaveButton";
import api from "./utils/API";


// import DeleteBtn from "./components/DeleteBtn";

import { SavedList, SavedListItem } from "./components/SavedList";
// import axios from 'axios';

// const APIKEY = 'hD5zUt6kiRs5BqLegpownhFdU59tqweK'
// const BASEURL = 'https://api.giphy.com/v1/gifs/search?q='


class App extends Component {
    state = {
        topic: "",
        startYear: "",
        endYear: "",
        searchHistory: [],
        articles: [],
        savedArticles: []
    };


      // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadSaved();
    
  }

  // Loads all books  and sets them to this.state.books
  loadSaved = () => {
    api.getSavedArticles()
      .then(res =>
        this.setState({ savedArticles: res.data})
      )
      .catch(err => console.log(err));
      console.log("loadSaved: " + this.state.savedArticles);
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteSaved = id => {
    api.deleteSaved(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };


// handleSaveArticle = id => {
//     api.saveArticle(id)
//       .then(res => this.loadSaved()) // WHAT
//       .catch(err => console.log(err));
//       console.log("Saved article " + this.state.savedArticles)
//   };

  handleSaveButton = id => {
    const article = this.state.articles.find(article => article._id === id);
    console.log("article: ", article);

    api.saveArticle(article)
        .then(res => this.getSavedArticles());

    console.log("HIT THE SAVE BUTTON")
}


    handleInputChange = (event) => {
        // Using object destructuring to create two variables (off of our event), then set the state dynamically based on those values
        const {name, value} = event.target;
        this.setState({[name]:value});
      };
    
    handleFormSubmit = event => {
    event.preventDefault();
    console.log("Getting NYT Articles");
    console.log("this.state.query: ", this.state.topic);
    console.log("this.state.begin: ", this.state.startYear);
    console.log("this.state.end: ", this.state.endYear);
    api.getArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then((res) => {
            this.setState({ articles: res.data.response.docs });
            console.log("this.state.articles: ", this.state.articles);
        });

};
        // playing around with saving search history to an array
        // let searchHistory = this.state.searchHistory
        // searchHistory.push({
        //   topic: this.state.topic,
        //   startYear: this.state.startYear,
        //   endYear: this.state.endYear
        // })
        // // this.setState({searchHistory})
        // this.setState({
        //   topic: "",
        //   startYear: "",
        //   endYear: "",
        //   searchHistory
        // })
    

render() {
    return(
    <div>
        <Jumbotron />
        {/* <Form  */}
        <div className="container panel">
        

         <Input
            name="topic"
            value={this.state.topic}
            onChange={this.handleInputChange}
            placeholder="Search for a topic"
       />
       
            <Input
                name="startYear"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                placeholder="Start year (YYYY)"
        />
        
            <Input
                name="endYear"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                placeholder="End year (YYYY)"
        />
            <SaveButton
                    onClick={this.handleFormSubmit}
                    type="success"
                    className="input-lg"
                >
                Search
            </SaveButton>
        </div>

        <ResultList>
            {this.state.articles.map(article => {
                    return (
                      <ResultListItem
                        key={article.id}
                        title={article.headline.main}
                        snippet={article.snippet}
                        href={article.web_url}>
                       
                    <SaveButton onClick={this.handleSaveButton} />
                    </ResultListItem>
                        
                    );
                
 
                  })}
        </ResultList>

        <SavedList>
            {this.state.savedArticles.map(savedArticle => {
                return (
                    <SavedListItem
                    key={savedArticle.id}
                    title={savedArticle.headline.main}
                    href={savedArticle.web_url}
                    thumbnail={savedArticle.thumbnail} />
                )
            })}
        </SavedList>
    </div>
    )
}
    }

export default App;
