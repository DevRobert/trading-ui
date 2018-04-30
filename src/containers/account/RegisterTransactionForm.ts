import { connect } from 'react-redux'
import RegisterTransactionFormComponent from '../../components/account/RegisterTransactionForm'
import { updateRegisterTransactionFields, registerTransaction } from '../../actions';

const mapStateToProps = (state: any) => {
    return {
        submitting: state.account.registerTransaction.submitting,
        errorMessage: state.account.registerTransaction.errorMessage,
        fields: state.account.registerTransaction.fields
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleFieldsChanged: (fields: any) => {
            dispatch(updateRegisterTransactionFields(fields))
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
