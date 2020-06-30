import React from 'react';

class SearchBar extends React.Component {
  // controlled 
  state = {term:""};
  
  
    // uncontrolled event handler 
  // onInputChange (event) {
  //   // event.target.value
  //   console.log(event.target.value);
  //   }

  //   // onInputClick () {
    //     console.log ("input was clicked")
    // }

//Do not want form to submit itself automatically and refresh the page

onFormSubmit = (event) => {
  event.preventDefault ();
  // reference to function that got passed in on App.js line13
  //class based component reference props with this.props
  this.props.onSubmit(this.state.term)
}

    render () {
       return( 
       <div className="ui segment">
           <form onSubmit = {this.onFormSubmit} className="ui form">
             <div className="field">
                <label >UnSplash Api Image Search</label>
         {/* onInputChange is a callback function, don't use onInputchange () because it will call the the function everytime it's rendered. so we are  passing a reference to the funcion to the input element.  Don't use () when using a callback to an event handler 
         Property name is onChange
         */}
                 <input 
                 type ="text" 
                 value={this.state.term}
                 onChange={e => this.setState({ term: e.target.value })} 
                 /> 
           
             </div>  
           </form>
       </div> 
   
   
   
        )


   }   

}

export default SearchBar