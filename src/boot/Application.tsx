import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import AccountPage from '../components/account/AccountPage'
import StrategyPage from '../containers/strategy/StrategyPage'
import ScoringList from '../containers/scoring/ScoringList'
import TradesList from '../containers/trades/TradesList'
import InstrumentList from '../containers/market/InstrumentList'
import NavListItem from '../components/shared/NavListItem'
import TaxReportPage from '../containers/taxes/TaxReportPage';

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
                        <NavListItem to="/account/">Account</NavListItem>
                        <NavListItem to="/strategy">Strategy</NavListItem>
                        <NavListItem to="/scoring/buy" active="/scoring/">Scoring</NavListItem>
                        <NavListItem to="/trades/">Trades</NavListItem>
                        <NavListItem to="/market/">Market</NavListItem>
                        <NavListItem to="/taxes/">Tax report</NavListItem>
                    </ul>
                </nav>

                <div className="body">
                    <Switch>
                        <Route path="/account/*" component={AccountPage}/>
                        <Route path="/strategy" component={StrategyPage}/>
                        <Route path="/scoring/:type" component={ScoringList}/>
                        <Route path="/trades/" component={TradesList}/>
                        <Route path="/market/" component={InstrumentList}/>
                        <Route path="/taxes/" component={TaxReportPage}/>
                        <Redirect from="/" to="/account/"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
