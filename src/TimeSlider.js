import SliderTicks from './assets/slider-ticks.svg'

const TimeSlider = ({ handleSliderChange, inputRef, value }) => {
  return (
    <div className="SliderContainer">
      <div className="SliderBar">
        <input onChange={handleSliderChange} onInput={handleSliderChange} ref={inputRef} type="range" />
        <span style={{ width: value + "%" }}></span>
      </div>

      <img src={SliderTicks} alt="" />
    </div>
  )
}

export default TimeSlider;
