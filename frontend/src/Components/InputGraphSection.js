import React, { Component } from "react"
import { calculate } from "../API"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DisplayGraph from "./DisplayGraph"
import "./InputGraphSection.css"

export default class InputGraphSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saved: 3000,
      added: 1500,
      interest: 7,
      compoundPeriod: 12, // monthly
      data: []
    }
  }

  updateValueForKey(key, value) {
    let state = this.state
    state[key] = value
    this.setState(state, () => {
      calculate(this.state.saved,
                this.state.added,
                this.state.interest,
                this.state.compoundPeriod)
      .then(
          r => this.setState({ data: r.data.result }),
          error => { console.debug(error) }
      )
    })
  }

  render() {
    const { data } = this.state || this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0}
                         value={this.state.saved}
                         handleChange={(value)=>{
                           this.updateValueForKey('saved', value)
          }}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0}
                         value={this.state.added}
                         handleChange={(value)=>{
                           this.updateValueForKey('added', value)
          }}/>

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput defaultValue={4}
                       value={this.state.interest}
                       handleChange={(value)=>{
                           this.updateValueForKey('interest', value)
          }}/>

          <p className="saved"> saved: {this.state.saved} </p>
          <p className="added"> added: {this.state.added} </p>
          <p className="interest"> interest: {this.state.interest}</p>

        </div>
        <div className="financial-display">
          <DisplayGraph
            data={data}
          />
        </div>
      </div>
    )
  }
}
