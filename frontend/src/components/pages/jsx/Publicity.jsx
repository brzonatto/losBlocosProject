import React, { useState } from 'react'
import PostForm from './PostForm2'
import Main from '../../templates/jsx/Main'
const axios = require('axios').default




export function Publicity() {    
    const [file, setFile] = useState()    

    const teste = event => {
        const data = new FormData()
        data.append('file', file)          

        axios.post('http://localhost:3000/upload', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }    

    return (
        <Main>
            <div>
                <div>Publicidade</div>
                <hr />
                <p>Instagram</p>
                
                <input type="file" name="file" onChange={event => {
                    const file = event.target.files[0]
                    setFile(file)
                }} />
                 <br />
                <button onClick={teste}>Submit</button><br /><br />

                <PostForm />                
            </div>
        </Main>
    )
}

export default Publicity