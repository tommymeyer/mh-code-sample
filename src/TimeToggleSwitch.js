const TimeToggleSwitch = ({ handleTimeToggle }) => {
  return (
    <div className="TimeToggleContainer">
      <label htmlFor="toggle">min</label>
      <input className="ToggleSwitch" id="toggle" name="toggle" onChange={handleTimeToggle} type="checkbox"></input>
      <label htmlFor="toggle">hrs</label>
    </div>
  )
}

export default TimeToggleSwitch;
