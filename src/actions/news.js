import axios from 'axios'

import { SEARCH_NEWS } from '../constants/news';

export function fetchNews(){
    return function(dispatch){
       return axios
            .get(
              "https://newsapi.org/v2/everything?q=apple&from=2018-01-04&to=2018-01-04&sortBy=popularity&apiKey=2ebcbf3a75f54c5281683cffa2472656"
            )
            .then(response => {
                dispatch({
                    type:SEARCH_NEWS,
                    payload:response.data.articles
                })
 
            });
    
    }
}