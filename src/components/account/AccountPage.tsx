import * as React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import AccountPositionList from '../../containers/account/AccountPositionList'
import AccountTransactionList from '../../containers/account/AccountTransactionList'
import RegisterTransactionForm from '../../containers/account/RegisterTransactionForm';

class AccountPage extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li><NavLink to="/account/positions/">Positions</NavLink></li>
                    <li><NavLink to="/account/transactions/">Transactions</NavLink></li>
                    <li><NavLink to="/account/registerTransaction">Register transaction</NavLink></li>
                </ul>

                <Switch>
                    <Route path="/account/positions/" component={AccountPositionList}/>
                    <Route path="/account/transactions/" component={AccountTransactionList}/>
                    <Route path="/account/registerTransaction" component={RegisterTransactionForm}/>
                    <Redirect path="/account/" to="/account/positions/"/>
                </Switch>
            </div>
        )
    }
}

export default AccountPage
