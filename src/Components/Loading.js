import React from 'react';

// Create a stateless component that displays a load message
const Loading = props => {  
    
    let loadText = '';

    if(props.loading) {
      loadText = "Loading images ...";
    } else {
      loadText = "";
    }

    return(
      <div>{loadText}</div>
    )
}
export default Loading;