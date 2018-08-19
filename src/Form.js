import React, { Component } from 'react';

class Form extends Component {
	render(){
		return(
			  <form>
          <input onChange={this.handleChange} type="text"  value={this.state.value} />
          <input type="submit" value="Submit" className="slide_btn" />
        </form>  
		)
	}
}

export default Form;