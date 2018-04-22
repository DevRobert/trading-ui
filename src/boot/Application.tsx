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
                    <div className="logo"><img src="static/logo.png" /></div>
                    <div className="text">Trading Command and Control Center</div>
                </div>

                <div className="clearfix"></div>

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
