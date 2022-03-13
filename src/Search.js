import React from "react";
import { Sort } from "./Sort";

class Search extends React.Component {
  state = {
    search: "",
    str: " ",
  };

  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            onKeyDown={e => this.props.movieSearch(e, this.state.search)}
            className='validate'
            placeholder='search'
            type='search'
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
          <button className='btn search-btn' onKeyDown={e => this.props.movieSearch(e, this.state.search)}>
            Search
          </button>
        </div>
        <Sort movieSearch={this.props.movieSearch} names={this.props.state.names} search={this.state.search} />
      </div>
    );
  }
}

export { Search };
