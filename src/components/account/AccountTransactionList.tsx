import * as React from 'react'

interface AccountTransactionListProps {
    transactions: Array<TransactionProps>,
    isLoading: boolean,
    errorMessage: string,
    loadAccountTransactions: () => void
}

interface TransactionProps {
    date: string,
    transactionType: string,
    isin: number,
    name: string,
    quantity: number,
    totalPrice: number,
    commission: number,
    marketPrice: number,
    amount: number
}

class AccountTransactionList extends React.Component {
    props: AccountTransactionListProps

    componentDidMount() {
        this.props.loadAccountTransactions()
    }
    
    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading account transactions...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        const transactions = this.props.transactions

        const transactionElements = transactions.map(transaction => {
            return (
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.isin}</td>
                    <td>{transaction.name}</td>
                    <td className="text-right">
                        {transaction.quantity && new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(transaction.quantity)}
                    </td>
                    <td className="text-right">
                        {transaction.marketPrice && new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.marketPrice)}
                    </td>
                    <td className="text-right">
                        {transaction.totalPrice && new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.totalPrice)}
                    </td>
                    <td className="text-right">
                        {transaction.commission && new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.commission)}
                    </td>
                    <td className="text-right">
                        {transaction.amount && new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.amount)}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>Account Transactions</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th className="text-right">Quantity</th>
                            <th className="text-right">Market price</th>
                            <th className="text-right">Total price</th>
                            <th className="text-right">Commission</th>
                            <th className="text-right">Dividend amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionElements}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AccountTransactionList
