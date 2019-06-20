import React, { Component } from "react"
import { calculate } from "../API"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import SelectInput from "./SelectInput"
import DisplayGraph from "./DisplayGraph"
import "./InputGraphSection.css"

export default class InputGraphSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      saved: 3000,
      added: 1500,
      interest: 7,
      compoundPeriod: 12, // monthly
      data: []
    }
  }

  componentDidMount() {
    calculate(this.state.saved,
        this.state.added,
        this.state.interest,
        this.state.compoundPeriod)
    .then(r => {
        this.setState({
            loading: false,
            data: r.data.result
        })
    })
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

    if (this.state.loading) {
        return <p>Loading...</p>
    }

    const { data } = this.state

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

          <SelectInput defaultValue={12}
                       handleChange={(value)=>{
                          this.updateValueForKey('compoundPeriod', value)
          }}/>

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
