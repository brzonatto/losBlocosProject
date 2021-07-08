import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            golsPro: '',
            golsContra: ''
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/make', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { golsPro, golsContra } = this.state
        
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="golsPro" value={golsPro} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type="text" name="golsContra" value={golsContra} onChange={this.changeHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm