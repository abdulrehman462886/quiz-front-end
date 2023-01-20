import React from "react";

export default function AddQuiz() {
  return (
    <div className="container">
      <div className="mb-3 my-5">
        <label for="exampleFormControlInput1" className="form-label">
        <strong>Enter Problem Statment?</strong>  
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
    </div>
  );
}
