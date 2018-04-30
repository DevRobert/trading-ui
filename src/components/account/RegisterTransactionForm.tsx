import * as React from 'react'

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
    handleFieldsChanged: (fields: any) => void,
    submit: () => void
}

class RegisterTransactionForm extends React.Component {
    props: RegisterTransactionFormProps

    constructor(props: RegisterTransactionFormProps) {
        super(props)
    }

    handleTransactionTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        this.props.handleFieldsChanged({
            transactionType: event.target.value
        })
    }

    handleIsinChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.handleFieldsChanged({
            isin: event.target.value
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
                            <input type="text" className="form-control" id="RegisterTransaction_IsinInput" value={this.props.fields.isin} onChange={(e) => this.handleIsinChange(e)} />
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
