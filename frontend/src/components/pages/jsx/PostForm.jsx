import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)        

        this.state = {
            golsPro: '',
            golsContra: '',
            gols: [{
                author: '', 
                amount: ''
            }]                        
        }    
        
        
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })        
    }

    changeHandler2 = event => {
        
        this.setState({            
            [event.target.name]: event.target.value
        })

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
                    <input 
                        type="text" 
                        name="author" 
                        value={gols.author} 
                        onChange={this.changeHandler2} />
                    <input 
                        type="text" 
                        name="amount" 
                        value={gols.amount} 
                        onChange={this.changeHandler2} />
                </div>   
                <br />
                <button>Adicionar</button>               
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm