import React from 'react'
import Main from '../../templates/jsx/Main'
import IndexSponsor from './IndexSponsor'
import FormSponsors from './FormSponsors'
import { Typography, Divider } from '@material-ui/core'

export function Sponsors() {    
    return (
        <Main>
            
            <Typography variant="h3">
                Patrocinadores
            </Typography>
            <Typography variant="subtitle1">
                Gerenciador de Patrocinadores
            </Typography>            
            <Divider style={{marginBottom: '20px'}} />
            <FormSponsors />
            <IndexSponsor />
        </Main>
    )
}

export default Sponsors