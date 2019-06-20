import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory'

export default class DisplayGraph extends Component {

	render() {
		const { data } = this.props;

		const baseProps = {
  		width: 450,
  		height: 300,
  		padding: 50,
  		colorScale: ["#48C8FF", "#00b2ff", "#038AD0", "#006C9B"]
		};

		const baseLabelStyles = {
  		fontFamily: "'Avenir Next', 'Avenir', 'Lato', 'Helvetica', 'Arial', 'Sans-Serif'",
  		fontSize: 10,
  		letterSpacing: 'normal',
  		padding: 30,
  		fill: "black",
  		stroke: "transparent"
		};

		const theme = {
			area: {
				style: {
					labels: baseLabelStyles
				}
			},
			axis: Object.assign({
				style: {
					axisLabel: baseLabelStyles,
					grid: {
						fill: "transparent",
						stroke: "transparent"
					},
					ticks: {
						fill: "transparent",
						size: 0,
						stroke: "transparent"
					}
				}
			}, baseProps),
			line: Object.assign({
				style: {
				data: {
					fill: "transparent",
					stroke: "#00b2ff",
					strokeWidth: 2
				},
				labels: baseLabelStyles
				}
			}, baseProps)
		};

		return (
			<div>
				<VictoryChart padding={{ left: 75, right:30,bottom: 100, top: 20 }}
						      animate={{duration: 100}} 
							  theme={theme}>
					<VictoryLine {...{data}} y="amount"/>
					<VictoryAxis dependentAxis
						label="Total (£)"
					/>
					<VictoryAxis
						label="Time (months)"
					/>
				</VictoryChart>
			</div>
		);
	}
}

DisplayGraph.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object)
};
