import React from 'react'
import './schedule.css'


function Card({subject, teacher, startTime, endTime, btnColor}) {
  return (
    <div className="card" style={{background: btnColor}}>
        <div id="details">
            <div id="classs">
                <h2 style={{letterSpacing: "1.5px", fontWeight: "bolder"}}>{subject} |</h2>
                <h4 style={{paddingLeft: "10px"}}>{teacher}</h4>
            </div>
            <div id="duration" style={{marginTop: "20px"}}>
                <h3>{startTime} - {endTime}</h3>
            </div>
        </div>
        <button className='btn'>JOIN</button>
    </div>
  )
}

function Schedule() {

  const btnColor = ['#D9D9FF', '#FFDEBD', '#B3FFD9', '#FFB9D5', '#B7D4FF']

  return(
    <>
    <div style={{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
      <Card subject={"Physics"} teacher={"P.R sir"} startTime={"12:00pm"} endTime="01:30pm" btnColor={btnColor[0]} />
      <Card subject={"Biology"} teacher={"M.B sir"} startTime={"09:00am"} endTime="10:30am" btnColor={btnColor[1]} />
      <Card subject={"Maths"} teacher={"P.K.M sir"} startTime={"02:00pm"} endTime="04:00pm" btnColor={btnColor[2]} />
    </div>
    </>
  )
}

export default Schedule