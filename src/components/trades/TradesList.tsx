import * as React from 'react'

interface TradesListProps {
    loadTrades: () => void,
    isLoading: boolean,
    errorMessage: string,
    marketPricesDate: string,
    trades: {
        type: string,
        isin: string,
        name: string,
        quantity: number,
        marketPrice: number,
        totalPrice: number,
        commission: number
    }[]
}

export default class TradesList extends React.Component {
    props: TradesListProps

    componentDidMount() {
        this.props.loadTrades()
    }

    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading trades...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        const tradeElements = this.props.trades.map(trade => {
            return (
                <tr>
                    <td>{trade.type}</td>
                    <td>{trade.isin}</td>
                    <td>{trade.name}</td>
                    <td>
                        {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(trade.quantity)}
                    </td>
                    <td>
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(trade.marketPrice)}
                    </td>
                    <td>
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(trade.totalPrice)}
                    </td>
                    <td>
                        {new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'EUR',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(trade.commission)}
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>
                    Trades
                    <br/>
                    <small>Market price history as of {this.props.marketPricesDate}</small>
                </h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Market price</th>
                            <th>Total price</th>
                            <th>Commission</th>
                        </tr>
                        {tradeElements}
                    </thead>
                </table>
            </div>
        )
    }
}
