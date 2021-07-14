import React from 'react'
import Main from '../../templates/jsx/Main'
import IndexSponsor from './IndexSponsor'
import FormSponsors from './FormSponsors'


export function Sponsors() {
    return (
        <Main>
            <div>Patrocinadores</div>
            <hr />
            <p>Sistema</p>            
            <FormSponsors />
            <IndexSponsor />
        </Main>
    )
}

export default Sponsors