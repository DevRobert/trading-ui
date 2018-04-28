import { connect } from 'react-redux'
import AccountPositionListComponent from '../../components/account/AccountPositionList'
import { fetchAccountPositions } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        positions: state.account.positions.positions,
        summary: state.account.positions.summary,
        isLoading: state.account.isLoading,
        errorMessage: state.account.errorMessage        
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadAccountPositions: () => {
            dispatch(fetchAccountPositions())
        }
    }
}

const AccountPositionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPositionListComponent)

export default AccountPositionListContainer
