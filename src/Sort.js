import React from "react";

class Sort extends React.Component {
  state = {
    value: "",
    subscription: "",
    names: "",
  };

  // stateValue = async e => {
  //   await this.setState({ names: e.target.value });
  //   this.props.movieSearch(e, this.props.search ? this.props.search : "terminator", this.state.names);
  // };

  stateValue = e => {
    this.setState(
      (state, props) => {
        // console.log(state);
        // console.log(props);
        return { names: e.target.value };
      },
      () => this.props.movieSearch(e, this.props.search ? this.props.search : "terminator", this.state.names)
    );
  };

  render() {
    const { names } = this.state;
    return (
      <>
        <form action='#' className='movies'>
          <label>
            <input
              className='with-gap'
              name='subscription'
              type='radio'
              checked={names == " "}
              onChange={this.stateValue}
              value=' '
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='subscription'
              type='radio'
              checked={names == "movie"}
              onChange={this.stateValue}
              value='movie'
            />
            <span>Films</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='subscription'
              type='radio'
              checked={names == "series"}
              onChange={this.stateValue}
              value='series'
            />
            <span>Series</span>
          </label>
        </form>
      </>
    );
  }
}

export { Sort };
