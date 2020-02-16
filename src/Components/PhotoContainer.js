import React from 'react';
import Photo from "./Photo";
import NotFound from "./NotFound";
import Loading from "./Loading";

// Create a component that serves as a container for the individual photos. It determines whether to show those photos, a "not found" message or the "loading" message.
const PhotoContainer = props => {

  const results = props.data;
  let container = <h3>Search for a gif or click one of the links above!</h3>;

  if(props.onSearch) {
    props.onSearch(props.searchTerm);
  }

  if(results.photo) {
    if(results.photo.length > 0) {
      let photos = results.photo.map(photo =>
        <Photo key={photo.id} farm={photo.farm} server={photo.server} secret={photo.secret} id={photo.id} />
      );
      if(props.loading) {
        container = <h2><Loading loading={props.loading}/></h2>
      } else {
        container = <h2>{props.search} gifs<ul>{photos}</ul></h2>;
      }
    } else {
      container = <NotFound />
    }
  }

  return(
    <div className="photo-container">
      {container}
    </div>
  );
}
export default PhotoContainer;