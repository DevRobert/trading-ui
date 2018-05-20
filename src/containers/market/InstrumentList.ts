import { connect } from 'react-redux'
import InstrumentListComponent from '../../components/market/InstrumentList'
import { fetchInstruments } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        instruments: state.market.instruments.instruments,
        date: state.market.instruments.date,
        isLoading: state.market.instruments.isLoading,
        errorMessage: state.market.instruments.errorMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadInstruments: () => {
            dispatch(fetchInstruments())
        }
    }
}

const InstrumentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentListComponent)

export default InstrumentListContainer
