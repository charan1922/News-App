import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import NewsDetail from "../components/NewsDetail";
import axios from "axios";

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2018-01-04&to=2018-01-04&sortBy=popularity&apiKey=2ebcbf3a75f54c5281683cffa2472656"
      )
      .then(response => this.setState({ news: response.data.articles }));
  }

  renderNews() {
    return this.state.news.map(news => (
      <NewsDetail key={news.url} news={news} />
    ));
  }

  render() {
    console.log(this.state);
    return (<ScrollView>{this.renderNews()}</ScrollView>);
  }
}

export default NewsList;
