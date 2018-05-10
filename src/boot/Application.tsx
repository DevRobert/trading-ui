import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import OverviewPage from '../components/overview/OverviewPage'
import AccountPage from '../components/account/AccountPage';
import ScoringList from '../containers/scoring/ScoringList'

export class Application extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="logo"><img src="/static/logo.png" /></div>
                    <div className="text">Trading Command and Control Center</div>
                    <div className="clearfix"></div>
                </div>

                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        {/*<li><NavLink to="/">Overview</NavLink></li>*/}
                        {/*<li><NavLink to="/strategy">Strategy</NavLink></li>*/}
                        <li><NavLink to="/account/">Account</NavLink></li>
                        <li><NavLink to="/scoring/buy">Scoring</NavLink></li>
                        {/*<li><NavLink to="/trades/">Trades</NavLink></li>*/}
                        {/*<li><NavLink to="/market">Market data</NavLink></li>*/}
                        {/*<li><NavLink to="/tax">Tax report</NavLink></li>*/}
                    </ul>
                </nav>

                <div className="body">
                    <Switch>
                        {/*<Route path="/overview" component={OverviewPage}/>*/}
                        <Route path="/account/*" component={AccountPage}/>
                        <Route path="/scoring/:type" component={ScoringList}/>
                        <Redirect from="/" to="/account/"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
