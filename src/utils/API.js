import axios from "axios";

// ADJUST

const api = {
  // Query NYT API
  // Grabs articles from the New York Times using the the New York Times article search API.
  getArticles: function (topic, startYear, endYear) {
      const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      const APIKEY = "?api-key=93a5d0b61b434fe7bb95183677f3e88f";
      return axios.get(BASEURL + APIKEY + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101");
  },
  // Retrieves saved articles from the db
  // Saves an article to the database
  saveArticle: function(articleData) {
      return axios.post("/api/articles", articleData)

  },
  // Retrieves saved articles from the db
  getSavedArticles: function() {
      return axios.get("/api/articles");
  },
  // // Deletes an article from the db
  // deleteArticle: function (id) {
  //     return axios.delete(`/api/saved/${id}`);
  // }
};

export default api;
