import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
// //OLD WAY
//   onSearchSubmit(term) {
//     console.log(term) 
//     // FIRST ARGUMENT IS THE URL, THE {SECOND ARGUMENT IS THE REST OF IT PARAMS AND HEADERS}
//     axios.get ('https://api.unsplash.com/search/photos', {
//       // QUERY TERM REFERS TO THE TERM IN LINE 8 onSearchSubmit(term)
//         params: {query: term},
//         headers:{
//           Authorization: 'Client-ID ANWRTldr9QUUMlMfZhRCeU97Qp1IVnbsKPEB-u_qMUg'
//         }
//           }).then((response) => {
//             console.log(response.data.results)
//           })
//   }
state = {images:[]};
//New way
  onSearchSubmit = async (term) => {
    console.log(term) 
 
    // FIRST ARGUMENT IS THE URL, THE {SECOND ARGUMENT IS THE REST OF IT PARAMS AND HEADERS}
    const response = await unsplash.get ('/search/photos', {
      // QUERY TERM REFERS TO THE TERM IN LINE 8 onSearchSubmit(term)
        params: {query: term},
        
          });
            console.log(response.data.results)
          this.setState ({images: response.data.results});
  }

  render () {
    return(
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
      </div>
      );
  }
}

export default App;