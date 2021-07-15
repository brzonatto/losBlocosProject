import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


const theme = createTheme({
    palette: {
        primary: {
            // Yellow play nicely together.
            main: green[400]
        },
        secondary: {
            // This is green.A700 as hex.
            main: red[700]
        }
    }
})



export function FormSponsors() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [nameSponsor, setNameSponsor] = useState('')
    const [imageSponsor, setImageSponsor] = useState()

    const handleChangeFile = event => {
        const imageSponsor = event.target.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            const preImage = document.getElementById('img')
            preImage.setAttribute('image', fileReader.result)
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
        setOpen(false)
        Location.forcedReload(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container style={{ marginBottom: '20px' }} direction="row" justifyContent="flex-end" alignItems="flex-start">
                <Button className="teste" variant="contained" color="primary" onClick={handleClickOpen}>
                    Novo
                </Button>
                <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adicionar Patrocinador</DialogTitle>
                    <DialogContent>
                        <Grid container direction="row" justifyContent="center">
                            <Grid xs={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Nome"
                                    variant="outlined"
                                    value={nameSponsor}
                                    onChange={handleChange} />
                            </Grid>
                            <Grid xs={6}>
                                <img id="img" src="" alt="" />
                                <Button
                                    variant="contained"
                                    size="small"
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

                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleClose} color="secondary">
                            Cancelar
                        </Button>
                        <Button variant="contained" onClick={handleSubmit} color="primary">
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </ThemeProvider>
    )
}

export default FormSponsors