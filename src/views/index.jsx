import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from '../routes'

function Views() {
    return (
        <BrowserRouter >
            <Switch>
                {
                    routes.map(({path,id,component,exact}) => <Route component={component} key ={id} path ={path} exact={exact} />)
                }
            </Switch>
        </BrowserRouter>
    )
}

export default Views
