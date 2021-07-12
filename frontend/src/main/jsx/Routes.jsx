import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../components/pages/jsx/Home'
import Publicity from '../../components/pages/jsx/Publicity'
import Sponsors from '../../components/pages/jsx/Sponsors'

export const Routes = props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/publicidade' component={Publicity}/>
        <Route path='/patrocinadores' component={Sponsors}/>      
        <Redirect from='*' to='/'/>    
    </Switch>

export default Routes