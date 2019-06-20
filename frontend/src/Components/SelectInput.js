import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SelectInput extends Component {
	constructor(props) {
		super(props)
	}

	handleChange(e) {
		const value = e.target.value
		this.props.handleChange(value)
	}

	render() {

		return (
			<div className="select-input">
				<p>How often will interest be paid?</p>
                <select onChange={this.handleChange.bind(this)}>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                </select>
			</div>
		)
	}
}

SelectInput.propTypes = {
	defaultValue: PropTypes.number
}
