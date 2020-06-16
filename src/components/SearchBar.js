import React from 'react';

class SearchBar extends React.Component {
    onInputChange (event) {
    // event.target.value
    console.log(event.target.value);
    }

    // onInputClick () {
    //     console.log ("input was clicked")
    // }




    render () {
       return( 
       <div className="ui segment">
           <form className="ui form">
             <div className="field">
                <label >Image Search</label>
         {/* onInputChange is a callback function, don't use onInputchange () because it will call the the function everytime it's rendered. so we are  passing a reference to the funcion to the input element.  Don't use () when using a callback to an event handler 
         Property name is onChange
         */}
                 <input type ="text" 
                //   onClick ={this.onInputClick} 
                  onChange={this.onInputChange} /> 
           
             </div>  
           </form>
       </div> 
   
   
   
        )


   }   

}

export default SearchBar