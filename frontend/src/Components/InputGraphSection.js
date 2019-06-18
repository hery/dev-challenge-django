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
      saved: 0,
      added: 0,
      interest: 0,
      data: []
    }
  }

  render() {
    const { result } = this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0} handleChange={(value)=>{
            this.setState({
              saved: value
            })
          }}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} handleChange={(value)=>{
            this.setState({
              added: value
            })
          }}/>

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput defaultValue={4} handleChange={(value)=>{
            this.setState({
              interest: value
            })
          }}/>

          <p className="saved"> saved: {this.state.saved} </p>
          <p className="added"> added: {this.state.added} </p>
          <p className="interest"> interest: {this.state.interest}</p>

        </div>
        <div className="financial-display">
          <DisplayGraph
            data={result || this.state.data}
          />
        </div>
      </div>
    )
  }
}
