import Clock from './assets/clock.svg'

const TimeDisplay = ({ isChecked, time }) => {
  return (
    <div className="TimeDisplayContainer">
      <img src={Clock} alt="" />

      <p>{time}</p>
      {isChecked === false && <small>min</small>}
      {isChecked === true && <small>hrs</small>}
    </div>
  )
}

export default TimeDisplay;
