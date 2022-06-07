import React, { Component } from 'react'

class Movie extends Component {
	render() {
		// code up here will run when this component renders
		console.log(this)
		return (
			<>
				<h2>The Lord of the Rings: {this.props.title}</h2>
				<p>{this.props.hours}h {this.props.mins}min</p>
			</>
		)
	}
}

export default Movie