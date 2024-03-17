
import { createContext, useEffect, useState } from "react";



export const QuestionContext = createContext();

export const QuestionContextProvider = ({children})=>{
    const[subject,setSubject] = useState("")

    const [time,setTime]=useState(0);
    const [topic , setTopic]=useState("");
    const [number,setNumber]=useState(0);
    const [options,setOptions]=useState([])
return(
    <QuestionContext.Provider value={{subject,setSubject,time,setTime,topic,setTopic,number,setNumber,options,setOptions}}>
        {children}
    </QuestionContext.Provider>
);
}