import * as React from 'react'
import { NavLink } from 'react-router-dom'
import ScoringNavigation from './ScoringNavigation';
import ScoringTable from './ScoringTable';

export interface ScoringListProps {
    isLoading: boolean,
    errorMessage: string,
    scores: Array<ScoreProps>,
    marketPricesDate: string,
    availableTypes: Array<TypeProps>,
    selectedType: string,
    match: {
        params: {
            type: string
        }
    },
    loadScores: (type: string) => void
}

interface ScoreProps {
    isin: string,
    name: string,
    score: number,
    comment: string
}

interface TypeProps {
    name: string,
    title: string
}

class ScoringList extends React.Component {
    props: ScoringListProps

    componentWillMount() {
        this.props.loadScores(this.props.match.params.type)
    }

    componentWillReceiveProps(nextProps: ScoringListProps) {
        if(nextProps.match.params.type !== this.props.match.params.type) {
            this.props.loadScores(nextProps.match.params.type)
        }
    }

    render() {
        const props = this.props

        return (
            <div>
                <ScoringNavigation {...props}/>
                <ScoringTable {...props} />
            </div>
        )
    }
}

export default ScoringList
