import { connect } from 'react-redux'
import ScoringListComponent from '../../components/scoring/ScoringList'
import { fetchScores } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        scores: state.scoring.scores,
        marketPricesDate: state.scoring.marketPricesDate,
        isLoading: state.scoring.isLoading,
        errorMessage: state.scoring.errorMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadScores: function() {
            dispatch(fetchScores())
        }
    }
}

const ScoringListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoringListComponent)

export default ScoringListContainer
