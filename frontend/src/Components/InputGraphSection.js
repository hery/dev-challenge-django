import React, { Component } from "react"
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
          <p className="data"> interest: {this.state.data} </p>

        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={[
              {
                month: 1,
                amount: 500
              },
              {
                month: 2,
                amount: 700
              },
              {
                month: 3,
                amount: 1000
              },
              {
                month: 4,
                amount: 1500
              }
            ]}
          />
        </div>
      </div>
    )
  }
}
