import React, { useState } from 'react'
import Main from '../../templates/jsx/Main'
import axios from 'axios'



export function Publicity() {
    const [golsPro, setGolsPro] = useState()
    const [golsContra, setGolsContra] = useState()
    const [file, setFile] = useState()

    const teste = event => {
        const data = new FormData()
        data.append('file', file)

        axios.post('http://localhost:3000/upload', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const teste2 = event => {
        const data = new FormData()
        data.append('golsPro', golsPro)
        data.append('golsContra', golsContra)

        axios.post('http://localhost:3000/make', data)
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
                }} /> <br />
                <button onClick={teste}>Submit</button><br /><br />
                <input type="text" name="golsPro" onChange={event => {
                    const { value } = event.target
                    setGolsPro(value)
                }} />
                <input type="text" name="golsContra" onChange={event => {
                    const { value } = event.target
                    setGolsContra(value)
                }} />  
                <button onClick={teste2}>make</button>
            </div>
        </Main>
    )
}

export default Publicity