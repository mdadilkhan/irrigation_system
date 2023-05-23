import React, { useState, useEffect } from "react";
import "./Style.css";
import Header from "../Header/Header";
import AddMachine from "./AddMachine/AddMachine";
import Machine from "../Machine/Machine";
import Controll from "../Controll/Controll";
import axios from "axios";
import { useParams } from "react-router-dom";
import LineChart from "../LineChart/LineChart";
import config from "../../config.json";

const Home = () => {
  const [machine, setMachine] = useState([]);
  const [graphType, setGraphType] = useState("monthly"); //monthly,daily
  const [year, setYear] = useState(2023);
  const [macData, setMacData]=useState({})
  const [thresholdMoisture, setThresholdMoisture]=useState()
  const [isMotorOn, setIsMotorOn]=useState()

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("machines>>", machine);

  const listOfMachine = () => {
    axios
      .get(`${config.apiUrl}/user`, { headers })
      .then((response) => {
        console.log(">>", response.data.machines);
        setMachine(response.data.machines);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    listOfMachine();
  }, []);

  let box = document.querySelector(".machine-container");

  const pressPrev = () => {
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft - width;
  };
  const pressNext = () => {
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft + width;
  };

  const { id } = useParams();
  console.log("machine id", id);

  const manualControll = (val) => {
    console.log("inside axios", val);
    const params = {
      id: id,
    };
    const data = {
      motorOn: val,
    };

    axios
      .put(`${config.apiUrl}/machine/motor-threshold/manual/${id}`, data, {
        params,
        headers,
      })
      .then((response) => {
        console.log(response);
        handleShow(id)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const autoControll = (val) => {
    console.log("inside axios", val);
    const params = {
      id: id,
    };
    const data = {
      thresholdMoisture: val,
    };
    axios
      .put(`${config.apiUrl}/machine/motor-threshold/auto/${id}`, data, {
        params,
        headers,
      })
      .then((resposne) => {
        // console.log(resposne);
        handleShow(id)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //code for line chart
  const userDate1 = () => {
    const params = {
      id: id,
    };
    axios
      .get(`${config.apiUrl}/machine/${id}`, {
        params,
        headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const [selectedDate, setSelectedDate] = useState('');

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
      hr: 200,
      Month: "Jan",
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
      hr: 150,
      Month: "Feb",
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
      hr: 100,
      Month: "Mar",
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
      hr: 250,
      Month: "Apr",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 200,
      Month: "May",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 500,
      Month: "Jun",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 200,
      Month: "Jul",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 450,
      Month: "Aug",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 220,
      Month: "Sep",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 330,
      hr: 200,
      Month: "Oct",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 370,
      Month: "Nov",
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr: 70,
      Month: "Dec",
    },
  ];
  //  const year=2000;

  const [motorUsagePerDay, setMotorUsagePerDay] = useState([]);

  console.log(motorUsagePerDay);
  const sortedData = motorUsagePerDay
    .map((data) => data)
    .sort((a, b) => a.durationMinutes - b.durationMinutes);
  console.log(sortedData);
  const dataMinute = motorUsagePerDay.map((data) => {
    return data.durationMinutes;
  });
  console.log(">>>", dataMinute);

  const handleShow = (_id) => {
    axios
      .get(`${config.apiUrl}/machine/${_id}`, {
        headers,
      })
      .then((response) => {
        console.log();
        setMacData(response.data);
        setThresholdMoisture(response.data.thresholdMoisture)
        setIsMotorOn(response.data.isMotorOn)
        // setUserData(userData.datasets[0].data=motorUsagePerDay.map((data)=>data.durationMinutes))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(sortedData.map(data=>data.durationMinutes));

  const [userData, setUserData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: `Motor Usage in Hr  year wise- ${year}`,
        data: UserData.map((data) => {
          console.log(data.durationMinutes);
          return (data.hr / 60).toFixed(1);
        }),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <Header />
      <div className="home_container">
        <AddMachine reload={listOfMachine} />
      </div>
      <div className="carousel">
        <button className="prev-btn" onClick={pressPrev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={pressNext}>
          <p>&gt;</p>
        </button>

        <div className="machine-container">
          {machine.map((item, index) => (
            <Machine key={index} data={item} reload={listOfMachine} show={handleShow} />
          ))}
        </div>
      </div>
      {/* <div>
        <label htmlFor="dateinput">Enter a date:</label>
        <input
          type="date"
          id="dateinput"
          name="dateinput"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <p>Selected date: {selectedDate}</p>
      </div> */}

      {id === undefined ? (
        ""
      ) : (
        <React.Fragment>

          <Controll _id={id} reload={handleShow} soilMoisture={macData.soilMoisture} thresholdMoisture={{value:thresholdMoisture, fn:setThresholdMoisture}} isMotorOn={{value:isMotorOn, fn:setIsMotorOn}} fun={{ manual: manualControll, auto: autoControll }} />
        </React.Fragment>
      )}

      {id === undefined ? (
        ""
      ) : (
        <div className="chart" style={{ width: 800 }}>
          <div className="filter">
            Graph type:
            <select
              className="year-input"
              onChange={({ target }) => setGraphType(target.value)}
              value={graphType}
            >
              <option value="monthly">monthly</option>
              <option value="daily">daily</option>
            </select>
            <br></br>
            {graphType === "monthly" ? (
              <React.Fragment>
                <label for="year-input">Enter a year:</label>
                <input
                  type="number"
                  id="year-input"
                  name="year"
                  min="2018"
                  max="2023"
                  className="year-input"
                  onChange={(e)=>setYear(e.target.value)}
                  value={year}
                ></input>
                
              </React.Fragment>
            ) : (
              <div className="d-none">
                <label for="year-input">Enter a year:</label>
                <input
                  type="number"
                  id="year-input"
                  name="year"
                  min="2018"
                  max="2023"
                  className="year-input"
                  defaultValue={2023}
                ></input>
                {/* <button className="btn show">Set Year</button> */}
              </div>
            )}
          </div>
          <LineChart chartData={userData} />
        </div>
      )}
    </>
  );
};

export default Home;
