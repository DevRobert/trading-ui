import { connect } from 'react-redux'
import ScoringListComponent from '../../components/scoring/ScoringList'

const mapStateToProps = (state: any) => {
    return {
        scores: state.scoring.scores
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const ScoringListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoringListComponent)

export default ScoringListContainer
