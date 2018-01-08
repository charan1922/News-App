import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import NewsDetail from "../components/NewsDetail";
import axios from "axios";
import { fetchNews } from '../actions/news'; 
import { connect } from 'react-redux';


class NewsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     news: []
  //   };
  // }

  // componentWillMount() {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/everything?q=apple&from=2018-01-04&to=2018-01-04&sortBy=popularity&apiKey=2ebcbf3a75f54c5281683cffa2472656"
  //     )
  //     .then(response => this.setState({ news: response.data.articles }));
  // }

  componentWillMount(){
    this.props.fetchNews();
  }

  renderNews() {
    // console.log(`news in render ${this.props.news`)
    return this.props.news.map(news =>
      
      (
    
      <NewsDetail key={news.url} news={news} />
      
    )
  );
  }

  render() {
    
     return (<ScrollView>{this.renderNews()}</ScrollView>);
   
  }
}

function mapStateToProps(state){
  
    return{
       news:state.news,
    };
}

export default connect(mapStateToProps,{fetchNews})(NewsList);
