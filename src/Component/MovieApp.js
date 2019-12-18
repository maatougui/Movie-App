import React, {Component} from "react";
import './MovieApp.css'
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'

const World = {
  id: 'World 2020',
  title: 'World',
  rating: 5,
  image: 'https://i.ytimg.com/vi/CdYPr_j2n0U/hqdefault.jpg',
  year: 2010}

const HobbsShaw = {
    id: 'HobbsShaw',
    title: 'Shawshank Redeption',
    image:'https://i.pinimg.com/564x/bd/a3/7c/bda37c70a7922bd0e959d513232ba06f.jpg',
    year: 2019,
    rating: 3
}
const ongBak = {
  id: 'ongbak',
  title: 'Tony Jaa',
  image:'https://m.media-amazon.com/images/M/MV5BNDg4MmQyODgtM2Q4ZC00ZWI2LWJkYmMtYTQ5ZGI5NDJhN2IwXkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_.jpg',
  year: 2019,
  rating: 3
}

const FilmTest = {id:'FilmTest', title: 'fikmTest', rating: 2, year: 1900}

const moviesToDisplay = [ World,FilmTest, HobbsShaw,ongBak]



class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
  
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase()
        )
      )
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              } />
        </main>
      </div>
    )
  }
}

export default MovieApp;
