import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import AccountPositionList from '../components/account/AccountPositionList'
import AccountTransactionList from '../components/account/AccountTransactionList'
import RegisterTransactionForm from '../components/account/RegisterTransactionForm'
import ScoringList from '../components/scoring/ScoringList'

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
                        <li><a href="">Overview</a></li>
                        <li><a href="">Strategy</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Scoring</a></li>
                        <li><a href="">Trades</a></li>
                        <li><a href="">Market data</a></li>
                        <li><a href="">Tax report</a></li>
                    </ul>
                </nav>

                <div className="body">
                    <AccountPositionList/>
                    <AccountTransactionList/>
                    <RegisterTransactionForm/>
                    <ScoringList/>
                </div>
            </div>
        );
    }
}
