import React, { FunctionComponent, Fragment } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Landing } from 'components/Landing'
import { Quiz } from 'components/Quiz'
import SecretSanta from 'components/SecretSanta'
import YourMatch from 'components/YourMatch'
import SetMatch from 'components/SetMatch'
import Terms from 'components/Terms'
import Back from 'components/Back'
import Snowfall from 'react-snowfall'

import './styles.scss'
const App: FunctionComponent = () => {
    return (
        <div>
        {/* <Snowfall/> */}
        <HashRouter>
            <Fragment>
            {/* <Back /> */}

                <Route exact path="/" component={Landing} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/secretsanta" component={SecretSanta} />
                <Route exact path="/yourmatch" component={YourMatch} />
                <Route exact path="/setmatch" component={SetMatch} />
                <Route exact path="/terms" component={Terms} />
            </Fragment>
        </HashRouter>
        <img src="http://media.philly.com/images/tornpaperBottom.png" />
        </div>
    )
}

export { App }