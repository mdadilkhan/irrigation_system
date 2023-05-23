import React, { useState, useEffect } from "react";
import "./Style.css";
import Header from "../Header/Header";
import AddMachine from "./AddMachine/AddMachine";
import Machine from "../Machine/Machine";
import Controll from "../Controll/Controll";
import axios from "axios";
import { useParams } from "react-router-dom";
import LineChart from "../LineChart/LineChart";

const Home = () => {
  const [machine, setMachine] = useState([]);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("machines>>", machine);

  const listOfMachine = () => {
    axios
      .get("https://lucky-sunbonnet-fly.cyclic.app/user", { headers })
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

  const {id}=useParams();
  console.log("machine id",id);


  const manualControll = (val)=>{
    console.log("inside axios",val);
      const params={
        id:id,
      }
      const data={
        motorOn:val
      }

      axios.put(`https://lucky-sunbonnet-fly.cyclic.app/machine/motor-threshold/manual/${id}`,data,{params,headers})
      .then((response)=>{
         console.log(response);
      }).catch((error)=>{
         console.log(error);
      })
  }


  const autoControll=(val)=>{
    console.log("inside axios",val);
      const params={
        id:id,
      }
      const data={
        thresholdMoisture:val
      }
     axios.put(`https://lucky-sunbonnet-fly.cyclic.app/machine/motor-threshold/auto/${id}`,data,{params,headers}).then((resposne)=>{
      console.log(resposne);
     }).catch((error)=>{
      console.log(error);
     })
  }


  //code for line chart
const userDate1=()=>{
  const params={
    id:id
  }
  axios.get(`https://lucky-sunbonnet-fly.cyclic.app/machine/${id}`,{params,headers}).then((response)=>{
      console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}
// const [selectedDate, setSelectedDate] = useState('');

// const handleDateChange = (event) => {
//   setSelectedDate(event.target.value);
// };

const [year,setYear]=useState(2022);
const handleYear=(e)=>{
   setYear(e.target.value);
   console.log(year);
}
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
      hr:200,
      Month:'Jan'

    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
      hr:150,
      Month:'Feb'

    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
      hr:100,
      Month:'Mar'

    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
      hr:250,
      Month:'Apr'

    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:200,
      Month:'May'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:500,
      Month:'Jun'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:200,
      Month:'Jul'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:450,
      Month:'Aug'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:220,
      Month:'Sep'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost:330 ,
      hr:200,
      Month:'Oct'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:370,
      Month:'Nov'
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
      hr:70,
      Month:'Dec'
    },
  ];
  //  const year=2000;
   


  const [motorUsagePerDay, setMotorUsagePerDay]=useState([]);

 console.log(motorUsagePerDay);
 const sortedData=motorUsagePerDay.map(data =>data).sort((a,b) => a.durationMinutes-b.durationMinutes);
console.log(sortedData);
const dataMinute=motorUsagePerDay.map((data)=>{
  return data.durationMinutes;
})
console.log('>>>',dataMinute);


   
  useEffect(() => {
    const charData = () => {
      axios
        .get(`https://lucky-sunbonnet-fly.cyclic.app/machine/${id}`,{headers})
        .then((response) => {
          setMotorUsagePerDay(response.data.motorUsagePerDay);
          // setUserData(userData.datasets[0].data=motorUsagePerDay.map((data)=>data.durationMinutes))
        })
        .catch((error) => {
          console.log(error);
        });
    };
    charData();
    
  },[]);

 

  // console.log(sortedData.map(data=>data.durationMinutes));
   
  const [userData, setUserData] = useState({
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: `Motor Usage in Hr  year wise- ${year}`,
        data: UserData.map((data)=>{
          console.log(data.durationMinutes)
          return (data.hr/60).toFixed(1);
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
        <AddMachine />
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
            <Machine key={index} data={item} />
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
      <label for="year-input">Enter a year:</label>
      <input type="number" id="year-input" name="year" min="1900" max="2099" onChange={handleYear}></input>
      <button className="btn show">Set Year</button>
      {id === undefined ? (
        ""
      ) : (
        <Controll fun={{ manual: manualControll, auto: autoControll }} />
      )}

      {id === undefined ? (
        ""
      ) : (
        <div className="chart" style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div>
      )}
    </>
  );
};

export default Home;
