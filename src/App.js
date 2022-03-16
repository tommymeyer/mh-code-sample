import { useRef, useState } from 'react';
import './sass/App.sass';
import backgroundImg from './assets/grain.jpg';
import TimeDisplay from './TimeDisplay';
import ArrowButtons from './ArrowButtons';
import PowerButton from './PowerButton';
import TimeToggleSwitch from './TimeToggleSwitch';
import TimeSlider from './TimeSlider';


function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState("50");
  const [value, setValue] = useState("50");
  const inputRef = useRef();

  const handleTimeIncrement = () => {
    inputRef.current.stepUp();
    setTime(inputRef.current.value);
    setValue(inputRef.current.value);
  }

  const handleTimeDecrement = () => {
    inputRef.current.stepDown();
    setTime(inputRef.current.value);
    setValue(inputRef.current.value);
  }

  const handleSliderChange = (newValue) => {
    inputRef.current.value = newValue.target.value;
    setTime(newValue.target.value);
    setValue(newValue.target.value);
  };

  const handleTimeToggle = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <TimeDisplay isChecked={isChecked} time={time} />

      <ArrowButtons handleTimeDecrement={handleTimeDecrement} handleTimeIncrement={handleTimeIncrement} />

      <PowerButton />

      <TimeToggleSwitch handleTimeToggle={handleTimeToggle} />

      <TimeSlider handleSliderChange={handleSliderChange} inputRef={inputRef} value={value} />
    </div>
  );
}

export default App;
