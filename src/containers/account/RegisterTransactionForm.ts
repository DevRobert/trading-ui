import { connect } from 'react-redux'
import RegisterTransactionFormComponent from '../../components/account/RegisterTransactionForm'
import { updateRegisterTransactionFields, registerTransaction, fetchRegisterTransactionInstruments } from '../../actions';

const mapStateToProps = (state: any) => {
    return {
        succeeded: state.account.registerTransaction.succeeded,
        submitting: state.account.registerTransaction.submitting,
        errorMessage: state.account.registerTransaction.errorMessage,
        fields: state.account.registerTransaction.fields,
        show: state.account.registerTransaction.show,
        instruments: state.account.registerTransaction.instruments
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleFieldsChanged: (fields: any) => {
            dispatch(updateRegisterTransactionFields(fields))
        },
        loadInstruments: () => {
            dispatch(fetchRegisterTransactionInstruments())
        },
        submit: () => {
            dispatch(registerTransaction())
        }
    }
}

const RegisterTransactionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionFormComponent)

export default RegisterTransactionFormContainer
