import React, { useState, useContext, useEffect } from "react";
import "./quiz.css";
import { Link } from "react-router-dom";
import { QuestionContext } from "../../context/QuestionContext";
import axios from "axios";
function Inputs({ sub, options = [], id }) {
  const {
    subject,
    setSubject,
    time,
    setTime,
    topic,
    setTopic,
    number,
    setNumber,
  } = useContext(QuestionContext);

  const handleChange = async (e) => {
    if (id == "subject") {
      const value = e.target.value;
      setSubject(value);
      console.log(value);
      try {
        axios
          .get("http://localhost:8000/api/users/gettopics", {
            subject: value,
          })
          .then((res) => {
            console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
    } else if (id == "topic") {
      setTopic(e.target.value);
    } else if (id == "time") {
      const value = e.target.value.split(" ")[0];
      setTime(value);
      console.log(value);
    } else {
      const value = e.target.value;
      setNumber(value);
      console.log(value);
    }
  };

  return (
    <form action="">
      <div className="inputWraper">
        <label htmlFor={sub} className="w-full">
          {sub}
        </label>
        <select
          name={sub}
          id="subject"
          className="ipts"
          value={
            id === "time"
              ? time + " min"
              : id === "subject"
              ? subject
              : id === "topic"
              ? topic
              : number
          }
          onChange={handleChange}
        >
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </div>
    </form>
  );
}

function Quiz() {
  const {
    subject,
    setSubject,
    time,
    setTime,
    topic,
    setTopic,
    number,
    setNumber,
  } = useContext(QuestionContext);
  //console.log(subject)
  let options = [];
  // useEffect(()=>{
  //   const preset= async ()=>{
  console.log(subject);
  //   //  try{
  //   //    axios.get("http://localhost:8000/api/users/gettopics",{
  //   //     subject:subject
  //   //   }).then((res)=>{
  //   //     console.log(res)
  //   //   })

  //   //   console.log(response)

  //   // }
  //   // catch(err){
  //   //   console.log(err)
  //   // }

  //    }
  //   return(
  //     preset()
  //   )
  // },[subject])

  return (
    <div className="wraper">
      <Inputs
        sub={"Subject"}
        options={["Physics", "Maths", "Chemistry", "Biology"]}
        id="subject"
      />
      <Inputs sub={"Topics"} options={[]} id="topic" />
      <Inputs
        sub={"Time-limit"}
        options={["5 min", "10 min", "15 min"]}
        id="time"
      />
      <Inputs sub={"No. of Question"} options={[5, 10]} id="number" />

      <p>
        <Link to="/Questions"> Let's Start </Link>
      </p>
    </div>
  );
}

export default Quiz;
