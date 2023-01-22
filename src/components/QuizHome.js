import React from 'react'

export default function QuizHome(props) {
  return (
    <div className="container">
      <table className="table my-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Statment</th>
            <th scope="col">A</th>
            <th scope="col">B</th>
            <th scope="col">C</th>
            <th scope="col">D</th>
            <th scope="col">Save</th>
          </tr>
        </thead>
        <tbody>
          {/* Function to map through the input array */}
          {props.inputarr.map((value, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{value.statement}</td>
                <td><input type="radio" id="age1" name="age" value={value.a} onChange={props.updateoption}/> {value.a}</td>
                <td><input type="radio" id="age1" name="age" value={value.b} onChange={props.updateoption}/> {value.b}</td>
                <td><input type="radio" id="age1" name="age" value={value.c} onChange={props.updateoption}/> {value.c}</td>
                <td><input type="radio" id="age1" name="age" value={value.d} onChange={props.updateoption}/> {value.d}</td>
                <td><button type="button" class="btn btn-primary" onClick={() => {props.savehandle(value.e)}}>Save</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
