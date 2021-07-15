import React from 'react'
import Main from '../../templates/jsx/Main'
import IndexSponsor from './IndexSponsor'
import FormSponsors from './FormSponsors'
import { Grid, makeStyles } from '@material-ui/core'
import { Typography, Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    }
}))

export function Sponsors() {
    const classes = useStyles()
    return (
        <Main>
            <div className={classes.root}>
                <Grid spacing={3} container direction="column">
                    <Grid xs={12} container direction="column" justifyContent="flex-start" alignItems="flex-start">
                        <Typography variant="h3">
                            Patrocinadores
                        </Typography>
                        <Typography variant="subtitle1">
                            Gerenciador de Patrocinadores
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid xs={12} container direction="row-reverse">
                        <FormSponsors />
                    </Grid>
                    <Grid container xs={12}>
                        <IndexSponsor />
                    </Grid>
                </Grid>
            </div>
        </Main>
    )
}

export default Sponsors