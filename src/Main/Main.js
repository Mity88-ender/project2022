/* key=2f15814a */

import { Card } from "../Card/Card";

function Main(props) {
  // console.log(props.movies);
  return (
    <>
      <div className='container'>
        <div className='main row'>
          {props.movies.map(item => (
            <Card key={item.imdbID} movies={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export { Main };
