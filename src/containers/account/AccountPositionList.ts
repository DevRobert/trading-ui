import { connect } from 'react-redux'
import AccountPositionListComponent from '../../components/account/AccountPositionList'

const mapStateToProps = (state: any) => {
    return {
        positions: state.account.positions.positions,
        summary: state.account.positions.summary
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
}

const AccountPositionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPositionListComponent)

export default AccountPositionListContainer
