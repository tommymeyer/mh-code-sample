const PowerButton = () => {
  const togglePowerButton = () => {
    const pwrBtn = document.getElementById("pwrBtn");

    pwrBtn.classList.toggle("active");
  }

  return (
    <div className="PowerButtonContainer">
      <button id="pwrBtn" className="PowerButton" onClick={togglePowerButton}><span className="PowerIndicator"></span>PWR</button>
    </div>
  )
}

export default PowerButton;
