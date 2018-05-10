import * as React from 'react'
import { ScoringListProps } from './ScoringList';

export default class ScoringTable extends React.Component {
    props: ScoringListProps
    
    render() {
        if(this.props.isLoading) {
            return (
                <p className="alert alert-info">Loading scoring...</p>
            )
        }

        if(this.props.errorMessage) {
            return (
                <p className="alert alert-danger">{this.props.errorMessage}</p>
            )
        }

        const scores = this.props.scores

        const scoreElements = scores.map(score => {
            return (
                <tr>
                    <td>{score.isin}</td>
                    <td>{score.name}</td>
                    <td>
                        {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 4,
                            maximumFractionDigits: 4
                        }).format(score.score)}
                    </td>
                    <td style={{ whiteSpace: "pre-line" }}>{score.comment}</td>
                </tr>
            )
        })

        return (
            <div>
                <h1>
                    Scoring
                    <br/>
                    <small>Market price history as of {this.props.marketPricesDate}</small>
                </h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Comment</th>
                        </tr>
                        {scoreElements}
                    </thead>
                </table>
            </div>
        )
    }
}
