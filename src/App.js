import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {

    }

    // Change to use arrow functions
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        required={true}
                    />
                    <input
                        type="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder="Message"
                        required={true}
                    />
                    <button
                        type="button"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </main>
        )
    }
}

export default App