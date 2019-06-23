import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            message: "",
            alert: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(process.env.REACT_APP_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state['email'],
                message: this.state['message'],
            })
        })
            .then(response => response.json())
            .then(json => this.setState({ alert: json.message }))
    }

    // Change to use arrow functions
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,
            alert: ""
        })
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>{this.state.alert}</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        required={true}
                    />
                    <input
                        type="textarea"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder="Message"
                        required={true}
                    />
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </main>
        )
    }
}

export default App