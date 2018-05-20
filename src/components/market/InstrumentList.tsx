import * as React from 'react'

interface InstrumentListProps {
    isLoading: boolean,
    errorMessage: string,
    date: string,
    instruments: InstrumentProps[],
    loadInstruments: () => void
}

interface InstrumentProps {
    isin: string,
    name: string,
    marketPrice: number
}

class InstrumentList extends React.Component {
    props: InstrumentListProps

    componentDidMount() {
        this.props.loadInstruments()
    }

    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading instruments...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        return (
            <div>
                <h1>
                    Instruments<br />
                    <small>Market prices as of {this.props.date}</small>
                </h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th>Market price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.instruments.map(instrument => {
                            return (
                                <tr>
                                    <td>{instrument.isin}</td>
                                    <td>{instrument.name}</td>
                                    <td>
                                        {new Intl.NumberFormat('en-GB', {
                                            style: 'currency',
                                            currency: 'EUR',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }).format(instrument.marketPrice)}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InstrumentList
