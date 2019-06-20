import React, { Component } from "react"
import { calculate } from "./API"
import InputGraphSection from './Components/InputGraphSection'
import "./App.css"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Finimize dev challenge</h1>
                </header>
                <InputGraphSection />
            </div>
        )
    }
}

export default App
