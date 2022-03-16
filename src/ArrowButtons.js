import ArrowUp from './assets/up.svg'
import ArrowDown from './assets/down.svg'

const ArrowButtons = ({ handleTimeDecrement, handleTimeIncrement }) => {
  return (
    <div className="ArrowButtonsContainer">
      <button className="ArrowButton" onClick={handleTimeIncrement}><img src={ArrowUp} alt="" /></button>
      <button className="ArrowButton" onClick={handleTimeDecrement}><img src={ArrowDown} alt="" /></button>
    </div>
  )
}

export default ArrowButtons;
