import './index.css'

const DenominationItem = props => {
  const {valueList, onClickButton} = props
  const {value} = valueList

  const onClickBalance = () => {
    onClickButton(value)
  }

  return (
    <li className="value-list">
      <button className="btn" type="button" onClick={onClickBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
