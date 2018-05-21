import * as React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
const { Token } = require('react-bootstrap-typeahead')

interface RegisterTransactionFormProps {
    succeeded: boolean,
    submitting: boolean,
    errorMessage: string,
    fields: {
        date: string,
        transactionType: string,
        isin: string,
        quantity: number,
        totalPrice: number,
        commission: number,
        amount: number
    },
    show: {
        quantity: boolean,
        totalPrice: boolean,
        commission: boolean,
        amount: boolean
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

    handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            date: event.target.value
        })
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

    handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            amount: event.target.value
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

                { this.props.succeeded &&
                    <p className="alert alert-success">The transaction has been registered.</p>
                }

                <form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <fieldset disabled={this.props.submitting}>
                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_DateInput">Date:</label>
                            <input type="text" className="form-control" id="RegisterTransaction_DateInput" value={this.props.fields.date} onChange={(e) => this.handleDateChange(e)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_TransactionTypeSelect">Type:</label>

                            <select className="form-control" id="RegisterTransaction_TransactionTypeSelect" value={this.props.fields.transactionType} onChange={(e) => this.handleTransactionTypeChange(e)}>
                                <option value="">Select Type:</option>
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                                <option value="Dividend">Dividend</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="RegisterTransaction_IsinInput">ISIN:</label>
                            {typeahead}
                        </div>

                        {this.props.show.quantity && (
                            <div className="form-group">
                                <label htmlFor="RegisterTransaction_QuantityInput">Quantity:</label>
                                <input type="text" className="form-control" id="RegisterTransaction_QuantityInput" value={this.props.fields.quantity} onChange={(e) => this.handleQuantityChange(e)} />
                            </div>
                        )}

                        {this.props.show.totalPrice && (
                            <div className="form-group">
                                <label htmlFor="RegisterTransaction_TotalPriceInput">Total price:</label>
                                <input type="text" className="form-control" id="RegisterTransaction_TotalPriceInput" value={this.props.fields.totalPrice} onChange={(e) => this.handleTotalPriceChange(e)} />
                            </div>
                        )}

                        {this.props.show.commission && (
                            <div className="form-group">
                            <label htmlFor="RegisterTransaction_CommissionInput">Commission:</label>
                            <input type="text" className="form-control" id="RegisterTransaction_CommissionInput" value={this.props.fields.commission} onChange={(e) => this.handleCommissionChange(e)} />
                            </div>
                        )}

                        {this.props.show.amount && (
                            <div className="form-group">
                                <label htmlFor="RegisterTransaction_AmountInput">Amount:</label>
                                <input type="text" className="form-control" id="RegisterTransaction_AmountInput" value={this.props.fields.amount} onChange={(e) => this.handleAmountChange(e)} />
                            </div>
                        )}

                        <button type="submit" className="btn btn-success">Register transaction</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default RegisterTransactionForm
