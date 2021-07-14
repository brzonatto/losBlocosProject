import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'
import SaveIcon from '@material-ui/icons/Save'


const theme = createTheme({
    palette: {
        primary: {
            // Yellow play nicely together.
            main: yellow.A700
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f'
        }
    }
})



export function FormSponsors() {
    const [nameSponsor, setNameSponsor] = useState('')
    const [imageSponsor, setImageSponsor] = useState()

    const handleChangeFile = event => {
        const imageSponsor = event.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            const preImage = document.getElementById('img')
            preImage.setAttribute('src', fileReader.result)
        }
        fileReader.readAsDataURL(imageSponsor)
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
        axios.post('http://localhost:3000/api/sponsor', data)
    }

    return (
        <ThemeProvider theme={theme}>
            <div>   
                <input
                    type="text"
                    name="name_sponsor"
                    placeholder="Nome"
                    value={nameSponsor}
                    onChange={handleChange} />
                <br />
                <br />
                <img id="img" src="" alt=""/>
                <Button
                    variant="contained"
                    component="label"
                    color="secondary">
                    Carregar Logo
                    <input
                        type="file"
                        hidden
                        name="image_sponsor"
                        onChange={handleChangeFile}
                    />
                </Button>                
                <br />
                <br />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}>
                    Salvar
                </Button>
            </div>
        </ThemeProvider>
    )
}

export default FormSponsors