import { connect } from 'react-redux'
import TaxReportPageComponent from '../../components/taxes/TaxReportPage'
import { fetchTaxReport } from '../../actions'

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.taxes.isLoading,
        errorMessage: state.taxes.errorMessage,
        taxPeriods: state.taxes.taxPeriods
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadTaxReport: () => {
            dispatch(fetchTaxReport())
        }
    }
}

const TaxReportPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaxReportPageComponent)

export default TaxReportPageContainer
