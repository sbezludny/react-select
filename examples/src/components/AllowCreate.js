import React from 'react';
import Select from 'react-select';

const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

const AllowCreate = React.createClass({
	propTypes: {
		allowCreate: React.PropTypes.bool,
		hint: React.PropTypes.string,
		label: React.PropTypes.string,
		options: React.PropTypes.array,
	},
	getDefaultProps: function() {
		return {
			options: FLAVOURS
		};
	},
	getInitialState: function() {
		return {
			value: []
		};
	},
	handleChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},
	renderHint () {
		if (!this.props.hint) return null;
		return (
			<div className="hint">{this.props.hint}</div>
		);
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					allowCreate
					multi
					value={this.state.value}
					placeholder="Select your favourite(s)"
					options={this.props.options}
					onChange={this.handleChange} />
				{this.renderHint()}
			</div>
		);
	}
});

module.exports = AllowCreate;
