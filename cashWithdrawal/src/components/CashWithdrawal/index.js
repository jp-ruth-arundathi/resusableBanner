import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  onClickButton = value => {
    this.setState(prevState => ({rupees: prevState.rupees - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state
    const name = 'Sara Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="withdraw-container">
          <div className="name-container">
            <div className="name">
              <h1 className="alpha">{initial}</h1>
            </div>
            <h1 className="name-heading">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amt-container">
              <p className="amount">{rupees}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-caption">Withdraw</p>
          <p className="rupee-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                valueList={eachValue}
                key={eachValue.id}
                onClickButton={this.onClickButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
