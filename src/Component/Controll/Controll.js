import React, { useEffect, useState } from "react";
import "./Controll.css"; // import CSS file

const Slider = ({ thresholdMoisture, _id, reload, auto }) => {
  // const [value, setValue] = useState(thresholdMoisture);
  // console.log(props);
  // console.log();
  const handleSliderChange = (event) => {
    // setValue(event.target.value);
    thresholdMoisture.fn(event.target.value);
    // thresholdMoisture=event.target.value
    // auto(event.target.value)
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={thresholdMoisture.value >= 0 ? thresholdMoisture.value : 0}
        onChange={handleSliderChange}
        className="slide"
      />
      <p className="threshold-value">
        Threshold- {thresholdMoisture.value >= 0 ? thresholdMoisture.value : 0}%
      </p>
      <button
        className="btn"
        onClick={async () => {
          await auto(thresholdMoisture.value);
        }}
      >
        set threshold
      </button>
    </div>
  );
};

const Controll = ({
  _id,
  soilMoisture,
  thresholdMoisture,
  isMotorOn,
  fun,
  reload,
}) => {
  const [mode, setMode] = useState(true); //false=manual
  // const [isSwitchOn, setisSwitchOn] = useState(props.isMotorOn===true);
  // console.log(props);

  // const token = localStorage.getItem("token");
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };
  
  const handleToggle = () => {
    // console.log(mode);
    setMode(!mode);
    if (mode === false) {
    }
  };

  const handleOnOff = async () => {
    // console.log(isSwitchOn);
    if (isMotorOn.value === true) await fun.manual(false);
    else await fun.manual(true);
    // props.fun.manual(isSwitchOn);
    // setisSwitchOn(!isSwitchOn);
  };

  return (
    <React.Fragment>
      <p className="s-moisture">
        soilMoisture 1: {soilMoisture === undefined ? 0 : soilMoisture[0]}%
      </p>
      <p className="s-moisture">
        soilMoisture 2: {soilMoisture === undefined ? 0 : soilMoisture[1]}%
      </p>
      <p className="s-moisture">
        soilMoisture 3: {soilMoisture === undefined ? 0 : soilMoisture[2]}%
      </p>
      <p className="s-moisture">
        soilMoisture 4: {soilMoisture === undefined ? 0 : soilMoisture[3]}%
      </p>
      <p className="s-moisture">motor is {isMotorOn.value ? "ON" : "OFF"} </p>

      <div className="card">
        <h2>Motor Control</h2>
        <h2 className="controll-heading">Manual</h2>
        <label className="switch">
          <input type="checkbox" checked={mode} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        {mode === true ? (
          <span className="controll-res">Automatic</span>
        ) : (
          <span className="controll-res">Auto</span>
        )}
        {mode === true ? (
          <Slider
            _id={_id}
            auto={fun.auto}
            thresholdMoisture={thresholdMoisture}
            reload={reload}
          />
        ) : (
          <button className="btn" onClick={handleOnOff}>
            {isMotorOn.value === true ? "OFF" : "ON"}
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Controll;
