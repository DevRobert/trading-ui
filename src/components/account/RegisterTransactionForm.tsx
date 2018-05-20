import * as React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
const { Token } = require('react-bootstrap-typeahead')

interface RegisterTransactionFormProps {
    submitting: boolean,
    errorMessage: string,
    fields: {
        transactionType: string,
        isin: string,
        quantity: number,
        totalPrice: number,
        commission: number
    },
    instruments: InstrumentProps[],
    handleFieldsChanged: (fields: any) => void,
    loadInstruments: () => void,
    submit: () => void
}

interface InstrumentProps {
    isin: string,
    name: string
}

class RegisterTransactionForm extends React.Component {
    props: RegisterTransactionFormProps

    constructor(props: RegisterTransactionFormProps) {
        super(props)
    }

    componentDidMount() {
        this.props.loadInstruments()
    }

    handleTransactionTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.props.handleFieldsChanged({
            transactionType: event.target.value
        })
    }

    handleIsinChange(text: string) {
        this.props.handleFieldsChanged({
            isin: text
        })
    }

    handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            quantity: event.target.value
        })
    }

    handleTotalPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            totalPrice: event.target.value
        })
    }

    handleCommissionChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            commission: event.target.value
        })
    }

    handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.submit()
    }

    render() {
        let options = this.props.instruments

        let typeaheadProps = {
            labelKey: 'label',
            placeholder: 'Select instrument...',
            options: this.props.instruments.map(instrument => {
                return {
                    label: instrument.isin + ' (' + instrument.name + ')'
                }
            }),
            onInputChange: (text: string) => {
                this.handleIsinChange(text)
            },
            onChange: (selectedInstruments: any) => {
                if(selectedInstruments.length == 0) {
                    return
                }

                this.handleIsinChange(selectedInstruments[0].label)
            }
        }

        const typeahead = (
            <Typeahead {...typeaheadProps} />
        )

        return (
            <div>
                <h1>Register Transaction</h1>

                { this.props.submitting && 
                    <p className="alert alert-info">Registering transaction...</p>
                }

                { this.props.errorMessage && 
                    <p className="alert alert-danger">{this.props.errorMessage}</p>
                }

                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <fieldset disabled={this.props.submitting}>
                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_TransactionTypeSelect">Type:</label>

                            <select className="form-control" id="RegisterTransaction_TransactionTypeSelect" value={this.props.fields.transactionType} onChange={(e) => this.handleTransactionTypeChange(e)}>
                                <option value="">Select Type:</option>
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_IsinInput">ISIN:</label>
                            {typeahead}
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_QuantityInput">Quantity:</label>
                            <input type="text" className="form-control" id="RegisterTransaction_QuantityInput" value={this.props.fields.quantity} onChange={(e) => this.handleQuantityChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_TotalPriceInput">Total price:</label>
                            <input type="text" className="form-control" id="RegisterTransaction_TotalPriceInput" value={this.props.fields.totalPrice} onChange={(e) => this.handleTotalPriceChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_CommissionInput">Commission:</label>
                            <input type="text" className="form-control" id="RegisterTransaction_CommissionInput" value={this.props.fields.commission} onChange={(e) => this.handleCommissionChange(e)} />
                        </div>

                        <button type="submit" className="btn btn-success">Register transaction</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default RegisterTransactionForm
