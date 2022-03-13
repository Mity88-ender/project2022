import React from "react";
import { Movies } from "./Movies";
import { Search } from "./Search";
import { Preloader } from "./Preloader";
import { Footer } from "./Footer/Footer";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// don't change the Component name "App"
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      film: "",
      names: " ",
      loading: false,
    };
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(err => console.log("Fetch Error ", err));
  }

  /*   movieSearch = (e, data) => {
    if (e.keyCode == 13) {
      const elem = this.state.movies.filter(item => item.Title.toLowerCase() == data.toLowerCase());
      const [elem1] = elem; // destructurization
      console.log(elem1);
      this.setState({ film: elem1 });
      // console.log(this.state.film);
    } else {
      console.log("xxxxxxxx");
    }
  }; */

  movieSearch = (e, data, type = "") => {
    this.setState({ names: type });
    if (e.keyCode == 13) {
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${data.trim().toLowerCase() ? data : "terminator"}`)
        .then(response => response.json())
        .then(data => {
          if (data.Search) {
            this.setState({ movies: data.Search, loading: false });
          } else {
            this.setState({ loading: true });
          }
        })
        .catch(err => console.log("Fetch Error ", err));
    } else {
      fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${data.trim().toLowerCase() ? data : "terminator"}&type=${type}`
      )
        .then(response => response.json())
        .then(data => {
          if (data.Search) {
            this.setState({ movies: data.Search });
          }
        })
        .catch(err => console.log("Fetch Error ", err));
    }
  };

  render() {
    const { movies, film, loading } = this.state;

    return (
      <main className='container content'>
        <Search movieSearch={this.movieSearch} state={this.state} />
        {movies.length && loading == false ? <Movies movies={this.state.movies} film={film} /> : <Preloader />}
        <Footer />
      </main>
    );
  }
}

/* The Matrix */
