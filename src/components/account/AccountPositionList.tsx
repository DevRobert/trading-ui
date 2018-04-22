import * as React from 'react'

class AccountPositionList extends React.Component {
    render() {
        const positions = [
            {
                isin: "DE0008404005",
                name: "Allianz",
                quantity: 3243,
                marketPrice: 1234.23213,
                totalPrice: 43242342.1321231
            },
            {
                isin: "DE000BAY0017",
                name: "Bayer",
                quantity: 0,
                marketPrice: 213.123123,
                totalPrice: 0
            },
            {
                isin: "DE0008430026",
                name: "Münchener Rückversicherungs-Gesellschaft",
                quantity: 10,
                marketPrice: 123.21313,
                totalPrice: 1232.13130
            }
        ]
        
        const summary = {
            totalStocksQuantity: 32323,
            totalStocksPrice: 234324.2342,
            availableMoney: 500.0,
            totalBalance: 23233.2323
        }

        const positionElements = positions.map(position => {
            return (
                <tr>
                    <td>{position.isin}</td>
                    <td>{position.name}</td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(position.quantity)}
                    </td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(position.marketPrice)}
                    </td>
                    <td className="text-right">
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(position.totalPrice)}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>Account Positions</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th className="text-right">Quantity</th>
                            <th className="text-right">Market price</th>
                            <th className="text-right">Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {positionElements}
                        <tr>
                            <td>Total stocks</td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(summary.totalStocksQuantity)}
                            </td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(summary.totalStocksPrice)}
                            </td>
                        </tr>
                        <tr>
                            <td>Available money</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(summary.availableMoney)}
                            </td>
                        </tr>
                        <tr>
                            <td>Total balance</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(summary.totalBalance)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AccountPositionList
