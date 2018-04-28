import { connect } from 'react-redux'
import RegisterTransactionFormComponent from '../../components/account/RegisterTransactionForm'

const mapStateToProps = (state: any) => {
    return {

    }
}

const mapDispatchToProps = (state: any) => {
    return {

    }
}

const RegisterTransactionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionFormComponent)

export default RegisterTransactionFormContainer
