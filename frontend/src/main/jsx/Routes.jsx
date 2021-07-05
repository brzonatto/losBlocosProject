import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../components/pages/jsx/Home'
import Publicity from '../../components/pages/jsx/Publicity'

export const Routes = props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/publicidade' component={Publicity}/>    
        <Redirect from='*' to='/'/>    
    </Switch>

export default Routes