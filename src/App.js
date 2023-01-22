import './App.css';
import React from 'react';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import AddQuiz from './components/AddQuiz';
import QuizHome from './components/QuizHome';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  //const [boolean, setBoolean] = useState(false);
  const [inputarr, setInputarr] = useState([]);
  const [index, setIndex] = useState([]);
  const [option, setOption] = useState("");
  const [i, setI] = useState("")
  const updateoption = (event) => setOption(event.target.value);
  console.log(option)
  const [inputdata, setInputdata] = useState({
    statement: "",
    a: "",
    b: "",
    c: "",
    d:"",
    e:""
  });
  let { statement, a, b, c, d, e } = inputdata;

  useEffect(()=>{
    axios
    .get("http://localhost:5000/get")
    .then(function (response) {
      // handle success
      //let array = response.data;
      let inputarr = response.data;
      setInputarr([...inputarr]);
    })
  },[ ])

  async function addrecordhandle () {
    setInputarr([...inputarr, { statement, a, b, c, d, e }]);
    //clear the input field again
    setInputdata({ statement: "", a: "", b: "", c: "" ,d:"" ,e:""});
    fetch("http://localhost:5000/submit", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "AccessControl-Allow-Origin": "*",
      },
      body: JSON.stringify({
        statement,
        a,
        b,
        c,
        d,
        e
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });    
  }
  // function to splice the previous record from that particular index
  // function updateData() {
  //   let total = [...inputarr];
  //   total.splice(index, 1, { statement, a, b, c, d, e });
  //   setInputarr(total);
  //   setBoolean(false);
  //   setInputdata({ statement: "", a: "", b: "", c: "" });
  // }
  //function to handle changes in input field
  function changehandle(event) {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  }
//   function deleteInput(index) {
//     let totalrecords = [...inputarr]
//     totalrecords.splice(index,1)
//     setInputarr(totalrecords)
//   }
//   function updateInput(index) {
//     let {statement, a, b, c} = inputarr[index]
//     setInputdata({statement, a, b, c})
//     setBoolean(true)
//     setIndex(index)
// }

  function savehandle(value){
    console.log(value)
    if(option == value){
         e++
         setI(e)
        console.log(i)
    }
  }

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route exact path="/add"  element={<AddQuiz inputdata={inputdata} changehandle={changehandle} addrecordhandle={addrecordhandle}/>} />
          <Route exact path="/" element={<QuizHome inputarr={inputarr} updateoption={updateoption} savehandle={savehandle}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
