import { connect } from 'react-redux'
import AccountTransactionListComponent from '../../components/account/AccountTransactionList'
import { fetchAccountTransactions } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        transactions: state.account.transactions.transactions,
        isLoading: state.account.transactions.isLoading,
        errorMessage: state.account.transactions.errorMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadAccountTransactions: () => {
            dispatch(fetchAccountTransactions())
        }
    }
}

const AccountTransactionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountTransactionListComponent)

export default AccountTransactionListContainer
