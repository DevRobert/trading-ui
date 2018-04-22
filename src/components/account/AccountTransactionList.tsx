import * as React from 'react'

class AccountTransactionList extends React.Component {
    render() {
        const transactions = [
            {
                date: '2018-04-23',
                type: 'Buy',
                isin: 'DE000BAY0017',
                name: 'Bayer',
                quantity: 1000,
                marketPrice: 2132.23232,
                totalPrice: 23432432.32424,
                commission: 10.0
            },
            {
                date: '2018-04-24',
                type: 'Sell',
                isin: 'DE000BAY0017',
                name: 'Bayer',
                quantity: 1000,
                marketPrice: 2132.23232,
                totalPrice: 23432432.32424,
                commission: 10.0
            }
        ]

        const transactionElements = transactions.map(transaction => {
            return (
                <tr>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.isin}</td>
                    <td>{transaction.name}</td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(transaction.quantity)}
                    </td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.marketPrice)}
                    </td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.totalPrice)}
                    </td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(transaction.commission)}
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
