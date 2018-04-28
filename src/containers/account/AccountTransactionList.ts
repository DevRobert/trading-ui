import { connect } from 'react-redux'
import AccountTransactionListComponent from '../../components/account/AccountTransactionList'

const mapStateToProps = (state: any) => {
    return {
        transactions: state.account.transactions.transactions
    }
}

const mapDispatchToProps = (state: any) => {
    return {

    }
}

const AccountTransactionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountTransactionListComponent)

export default AccountTransactionListContainer
