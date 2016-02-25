//app/components/addRecipe.jsx
import React from 'react';
import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';

export default class AddRecipe extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			nameValid: 'success'
		};
	}

	render() {
		return (
			<div>
				<form id="recipeForm">
					<div className="form-group">
						<Input type="text" 
							label="Name" 
							groupClassName="group-class"
							labelClassName="label-class"
							id="recipeName"
							name="recipeName"
							size="50"
							help="Name must be unique or recipe will not be saved."
							bsStyle={this.state.nameValid} hasFeedback
							onChange={this.validationState}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="recipe-ingredients">Ingredients</label>
						<input type="text" className="form-control" id="recipeIngredients" name="recipeIngredients" placeholder="enter ingredients separated by commas" size="50" />
					</div>
				</form>
				<Button type="submit" onClick={this.addRecipe} bsStyle="primary" >Save</Button><br/>
				<Button bsStyle="default" onClick={() => this.setState({show: false})}>Close</Button>
			</div>
		)
	}

	/**
	 * Form validation to ensure that a new name field is unique (key in localStorage)
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	validationState = (event) => {
		let matchCount;
		let curName = event.target.value;
		if (localStorage.getItem(curName)) {
			this.setState({nameValid: 'error'});
		} else {
			this.setState({nameValid: 'success'});
		}
	};

}
