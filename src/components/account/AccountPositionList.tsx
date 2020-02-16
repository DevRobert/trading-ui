import * as React from 'react'

interface AccountPositionListProps {
    positions: Array<PositionProps>,
    marketPricesDate: string,
    summary: SummaryProps,
    isLoading: boolean,
    errorMessage: string,
    loadAccountPositions: () => void
}

interface PositionProps {
    isin: string,
    name: string,
    quantity: number,
    marketPrice: number,
    totalMarketPrice: number
}

interface SummaryProps {
    totalStocksQuantity: number,
    availableMoney: number,
    totalStocksMarketPrice: number,
    totalBalance: number,
    reservedTaxes: number,
    paidTaxes: number
}

class AccountPositionList extends React.Component {
    props: AccountPositionListProps

    componentDidMount() {
        this.props.loadAccountPositions()
    }

    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading account positions...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        const positions = this.props.positions
        const summary = this.props.summary

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
                        }).format(position.totalMarketPrice)}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>
                    Account Positions
                    <br/>
                    <small>Market prices as of {this.props.marketPricesDate}</small>
                </h1>

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
                                }).format(summary.totalStocksMarketPrice)}
                            </td>
                        </tr>
                        <tr>
                            <td>Reserved taxes</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(summary.reservedTaxes)}
                            </td>
                        </tr>
                        <tr>
                            <td>Paid taxes</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td className="text-right">
                                {new Intl.NumberFormat('en-GB', {
                                    style: 'currency',
                                    currency: 'EUR',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }).format(summary.paidTaxes)}
                            </td>
                        </tr>
                        <tr>
                            <td>Total balance (after tax)</td>
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
                        <tr>
                            <td>Available money (after tax)</td>
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
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AccountPositionList
