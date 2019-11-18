import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieServices";
import { getGenres } from "../services/genreServices";
import { toast } from "react-toastify";
import MovieTable from "./movieTable";
import ListGroup from "../common/listGroup";
import { paginate } from "../utils/paginate";
import Pagination from "../common/pagination";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getGenres();

    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async movie => {
    const originalMovie = this.state.movies;
    const movies = originalMovie.filter(m => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This moive had already been deleted!");
      this.setState({ movies: originalMovie });
    }
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };
  hanldePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genres => {
    this.setState({ selectedGenre: genres, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      movies: allMovies
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    // if (selectedGenre)
    // const filter =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter(m => m.genre._id === selectedGenre._id)
    //     : allMovies;

    const sorted = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totlaCount: filtered.length, data: movies };
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    // const { length: count } = this.state.movies;

    const { totlaCount, data: movies } = this.getPagedData();

    const { user } = this.props;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {user && (
            <Link
              to="/movies/new"
              className="btn btn-primary "
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
          )}
          <p>Showing {totlaCount} movies in the database!</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totlaCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.hanldePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
