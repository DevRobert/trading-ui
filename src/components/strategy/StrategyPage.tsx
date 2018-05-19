import * as React from 'react'

interface StrategyPageProps {
    isLoading: boolean,
    errorMessage: string,
    trading: {
        name: string,
        parameters: ParameterProps[]
    },
    commission: {
        name: string,
        parameters: ParameterProps[]
    },
    loadStrategyParameters: () => void
}

interface ParameterProps {
    name: string,
    value: string
}

class StrategyPage extends React.Component {
    props: StrategyPageProps

    componentWillMount() {
        this.props.loadStrategyParameters()
    }

    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading strategy parameters...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        const tradingParameterRows = this.props.trading.parameters.map(parameter => {
            return (
                <tr>
                    <th>{parameter.name}:</th>
                    <td>{parameter.value}</td>
                </tr>
            )
        })

        const commissionParameterRows = this.props.commission.parameters.map(parameter => {
            return (
                <tr>
                    <th>{parameter.name}:</th>
                    <td>{parameter.value}</td>
                </tr>
            )
        })

        return (
            <div>
                <h1>Strategy</h1>

                <h2>Trading</h2>

                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <td>{this.props.trading.name}</td>
                        </tr>
                        {tradingParameterRows}
                    </tbody>
                </table>

                <h2>Commissions</h2>

                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th>Name:</th>
                            <td>{this.props.commission.name}</td>
                        </tr>
                        {commissionParameterRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StrategyPage
