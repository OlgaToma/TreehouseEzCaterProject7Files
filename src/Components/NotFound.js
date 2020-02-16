import React from 'react';

// Create a component that will handle our "no results" case
const NotFound = props => {
    return(
      <div>
        <h2>No results found!</h2>      
        <h4>That search did not return any results, please try again.</h4>
      </div>
    )
}
export default NotFound;