import React, { useState } from 'react'
import axios from 'axios'

export function FormSponsors() {
    const [nameSponsor, setNameSponsor] = useState('')
    const [imageSponsor, setImageSponsor] = useState()

    const handleChangeFile = event => {
        const imageSponsor = event.target.files[0]
        setImageSponsor(imageSponsor)
    }

    const handleChange = event => {
        const nameSponsor = event.target.value
        setNameSponsor(nameSponsor)
    }

    const handleSubmit = () => {
        const data = new FormData()
        data.append('name_sponsor', nameSponsor)
        data.append('image_sponsor', imageSponsor)

        // const data = { name_sponsor: nameSponsor, image_sponsor: imageSponsor }
        console.log(data)
        axios.post('http://localhost:3000/api/sponsor', data)
    }

    return (
        <div>
            <input 
                type="text" 
                name="name_sponsor" 
                placeholder="Nome"
                value={nameSponsor}
                onChange={handleChange} />
            <br />
            <br />
            <input 
                type="file" 
                name="image_sponsor"                
                onChange={handleChangeFile} />
            <br />
            <br />
            <button onClick={handleSubmit}>Criar</button>
        </div>        
    )
}

export default FormSponsors