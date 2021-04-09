import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../../container/layout/Header'
import Main from '../../container/main/main'

const Router = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/' component={Main} />
            </Switch>
        </>
    )
}

export default Router;