import * as React from 'react'

class ScoringList extends React.Component {
    render() {
        const scores = [
            {
                isin: 'DE0008430026',
                name: 'Münchener Rückversicherungs-Gesellschaft',
                score: 0.8322323213123,
                text: 'Buy'
            },
            {
                isin: 'DE0008232125',
                name: 'Lufthansa',
                score: 0.00020020,
                text: 'Do not buy'
            }
        ]

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
