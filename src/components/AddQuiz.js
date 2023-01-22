import React from "react";

export default function AddQuiz(props) {
  return (
    <>
    <div className="container">
      <div className="container my-3 form-group row">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Enter Problem Statment? - MCQ </strong>
        </label>
        <input
          value={props.inputdata.statement}
          onChange={props.changehandle}
          autoComplete="off"
          type="text"
          name="statement"
          className="form-control"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Option 1</strong>
        </label>
        <input
          value={props.inputdata.a}
          onChange={props.changehandle}
          type="a"
          name="a"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Option 2</strong>
        </label>
        <input
          value={props.inputdata.b}
          onChange={props.changehandle}
          type="text"
          autoComplete="off"
          name="b"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Option 3</strong>
        </label>
        <input
          value={props.inputdata.c}
          onChange={props.changehandle}
          type="text"
          name="c"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Option 4</strong>
        </label>
        <input
          value={props.inputdata.d}
          onChange={props.changehandle}
          type="text"
          name="d"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="container my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <strong>Correct Answer</strong>
        </label>
        <input
          value={props.inputdata.e}
          onChange={props.changehandle}
          type="text"
          name="e"
          autoComplete="off"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <button
        disabled={
          props.inputdata.statement.length === 0 ||
          props.inputdata.a.length === 0 ||
          props.inputdata.b.length === 0 ||
          props.inputdata.c.length === 0 ||
          props.inputdata.d.length === 0 ||
          props.inputdata.e.length === 0
        }
        type="button"
        onClick={props.addrecordhandle}
        className="container btn btn-success my-3"
      >
        {`Add Question`}
      </button>
    </div>
    </>
  );
}
