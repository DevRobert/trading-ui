import * as React from 'react'

interface ScoringListProps {
    scores: Array<ScoreProps>
}

interface ScoreProps {
    isin: string,
    name: string,
    score: number,
    text: string
}

class ScoringList extends React.Component {
    props: ScoringListProps

    render() {
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
                    <td>{score.text}</td>
                </tr>
            )
        })

        return (
            <div>
                <h1>
                    Scoring
                    <br/>
                    <small>as of 00/00/0000</small>
                </h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ISIN</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Description</th>
                        </tr>
                        {scoreElements}
                    </thead>
                </table>
            </div>
        )
    }
}

export default ScoringList
