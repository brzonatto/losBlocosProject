import React, { useState } from 'react'
import Main from '../../templates/jsx/Main'
import axios from 'axios'
import Jimp from 'jimp'


export function Publicity() {
    

    const [file, setFile] = useState()
    const teste = event => {
       const data = new FormData()
       data.append('file', file)
       
        axios.post('http://localhost:3000/upload', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }  

    async function teste2() {
        const image = await Jimp.read('./jogo.jpg')
        const background = await Jimp.read('./background.png')
        image.resize(994, 724)
        background.composite(image, 43, 0)
        background.writeAsync('finish.png')
    }

    return (        
        <Main>
            
            <div>
            <div>Publicidade</div>
            <hr />
            <p>Instagram</p>
            <form action="#">
                <input type="file" name="file" onChange={event => {
                    const file = event.target.files[0]
                    setFile(file)
                }}/>
            </form>
            <button onClick={teste}>Submit</button>
            <button onClick={teste2}>make</button>
            </div>
        </Main>
    )
}

export default Publicity