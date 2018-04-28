import * as React from 'react'

class RegisterTransactionForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Register Transaction</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="RegisterTransaction_IsinInput">ISIN:</label>
                        <input type="text" className="form-control" id="RegisterTransaction_IsinInput" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="RegisterTransaction_QuantityInput">Quantity:</label>
                        <input type="text" className="form-control" id="RegisterTransaction_QuantityInput" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="RegisterTransaction_MarketPriceInput">Market price:</label>
                        <input type="text" className="form-control" id="RegisterTransaction_MarketPriceInput" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="RegisterTransaction_CommissionInput">Commission:</label>
                        <input type="text" className="form-control" id="RegisterTransaction_CommissionInput" />
                    </div>

                    <button type="submit" className="btn btn-success">Register transaction</button>
                </form>
            </div>
        )
    }
}

export default RegisterTransactionForm
