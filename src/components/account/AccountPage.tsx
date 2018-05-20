import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AccountPositionList from '../../containers/account/AccountPositionList'
import AccountTransactionList from '../../containers/account/AccountTransactionList'
import RegisterTransactionForm from '../../containers/account/RegisterTransactionForm';
import NavListItem from '../shared/NavListItem'

class AccountPage extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <NavListItem to="/account/positions/">Positions</NavListItem>
                    <NavListItem to="/account/transactions/">Transactions</NavListItem>
                    <NavListItem to="/account/registerTransaction">Register Transaction</NavListItem>
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
