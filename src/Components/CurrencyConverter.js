import React, {Component} from 'react';

class Currency extends Component {
    state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount:0
    }

    handleAmountIncrease = () => {
        this.setState((prevState) => {
            return {
                amount: (prevState.amount += 1)
            }
        })
    }

    handleAmountDecrease = () => {
        this.setState((prevState) => {
            return {
                amount: (prevState.amount -= 1)
            }
        })
    }

    handleOptionSelect = (evt) => {
        const userValue = evt.target.value
        this.setState(() => {
            return {
                selectedCurrency: userValue,
                currencyChosen: userValue === 'Select Currency' ? false : true
            }
        })
    }

    render() {
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ]
        let currencyOptions = currencyData.map((currency, index) => (
            <option value={index} key={index}>
                {currency.name}
            </option>
        ))
        return(
            <div>
                <select onChange={this.handleOptionSelect}>
                    <option value="Select Currency"></option>
                    {currencyOptions}
                </select>
                <div>
                    <button onClick={this.handleAmountIncrease} className="add">+</button>
                    <button onClick={this.handleAmountDecrease} className="minus">-</button>
                </div>
                <div>

				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<></>
				)}
			</div>
            </div>
        );
    };
};


export default Currency;