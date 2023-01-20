import './App.css';
import React from 'react';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import AddQuiz from './components/AddQuiz';
import QuizHome from './components/QuizHome';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route exact path="/add"   element={<AddQuiz />} />
          <Route exact path="/" element={<QuizHome />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
