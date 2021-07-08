import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            golsPro: '',
            golsContra: '',
            gols: ''
        }        
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
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

    // clickHandler = event => {           
    //     event.preventDefault()
    //     console.log('teste')  
    //     const { gols } = this.state      
    //     let box = document.getElementById('box')
    //     let elemento = document.createElement('input')        
    //     elemento.setAttribute('type', 'text')        
    //     elemento.setAttribute('name', 'gols')  
    //     elemento.setAttribute('value', gols)  
    //     elemento.setAttribute('onChange', '{this.changeHandler}')
    //     box.appendChild(elemento)        
    // }    

    render() {
        const { golsPro, golsContra, gols } = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type="text" name="golsPro" value={golsPro} onChange={this.changeHandler} /> Gols Pro
                </div>
                <div>
                    <input type="text" name="golsContra" value={golsContra} onChange={this.changeHandler} /> Gols Contra
                </div>
                <br />
                <div id="box" className="box">
                    <input type="text" name="gols" value={gols} onChange={this.changeHandler} />
                </div>  
                {/* <button id="add" onClick={this.clickHandler}>Add</button>     */}
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm