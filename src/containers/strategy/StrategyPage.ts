import { connect } from 'react-redux'
import StrategyPageComponent from '../../components/strategy/StrategyPage'
import { fetchStrategyParameters } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.strategy.isLoading,
        errorMessage: state.strategy.errorMessage,
        trading: state.strategy.trading,
        commission: state.strategy.commission
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadStrategyParameters: () => {
            dispatch(fetchStrategyParameters())
        }
    }
}

const StrategyPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StrategyPageComponent)

export default StrategyPageContainer
