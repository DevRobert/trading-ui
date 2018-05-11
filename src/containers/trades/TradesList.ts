import { connect } from 'react-redux'
import TradesListComponent from '../../components/trades/TradesList'
import { fetchTrades } from '../../actions';

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.trades.isLoading,
        errorMessage: state.trades.errorMessage,
        trades: state.trades.trades,
        marketPricesDate: state.trades.marketPricesDate
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadTrades: () => {
            dispatch(fetchTrades())
        }
    }
}

const TradesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TradesListComponent)

export default TradesListContainer
