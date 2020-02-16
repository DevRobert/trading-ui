import * as React from 'react'

interface TaxReportPageProps {
    isLoading: boolean,
    errorMessage: string,
    loadTaxReport: () => void,
    taxPeriods: any
}

class TaxReportPage extends React.Component {
    props: TaxReportPageProps

    componentWillMount() {
        this.props.loadTaxReport()
    }

    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading tax report...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        let rows = []

        for(let taxPeriod of this.props.taxPeriods) {
            for(let profitCategory of taxPeriod.profitCategories) {
                rows.push(
                    <tr>
                        <td>{ taxPeriod.year }</td>
                        <td>{ profitCategory.name }</td>
                        <td>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(profitCategory.lossCarryforward)}
                        </td>
                        <td>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(profitCategory.accruedProfit)}
                        </td>
                        <td>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(profitCategory.clearedProfit)}
                        </td>
                        <td>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(profitCategory.reservedTaxes)}
                        </td>
                        <td>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'EUR',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(profitCategory.paidTaxes)}
                        </td>
                    </tr>
                )
            }
        }

        return (
            <div>
                <h1>Tax report</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Profit category</th>
                            <th>Loss carryforward</th>
                            <th>Accrued profit</th>
                            <th>Cleared profit</th>
                            <th>Reserved taxes</th>
                            <th>Paid taxes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaxReportPage
