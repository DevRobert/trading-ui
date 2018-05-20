import { connect } from 'react-redux'
import RegisterTransactionFormComponent from '../../components/account/RegisterTransactionForm'
import { updateRegisterTransactionFields, registerTransaction, fetchRegisterTransactionInstruments } from '../../actions';

const mapStateToProps = (state: any) => {
    return {
        submitting: state.account.registerTransaction.submitting,
        errorMessage: state.account.registerTransaction.errorMessage,
        fields: state.account.registerTransaction.fields,
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
