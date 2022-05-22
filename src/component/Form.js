import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [live, setLive] = useState("");
  const [usia, setUsia] = useState("");

  const nameOnChangeHandle = (event) => {
    setName(event.target.value);
  };
  const programOnChangeHandle = (event) => {
    setProgram(event.target.value);
  };
  const liveOnChangeHandle = (event) => {
    setLive(event.target.value);
  };
  const usiaOnChangeHandle = (event) => {
    setUsia(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      program: program,
      live: live,
      usia: usia,
    };

    props.onAddStudent(data);
  };
  return (
    <form className="form_controls" onSubmit={onSubmit}>
      <div className="form_control">
        <label>Nama</label>
        <input type="text" onChange={nameOnChangeHandle}></input>
      </div>
      <div className="form_control">
        <label>Program Kelas</label>
        <input type="text" onChange={programOnChangeHandle}></input>
      </div>
      <div className="form_control">
        <label>Domisili</label>
        <input type="text" onChange={liveOnChangeHandle}></input>
      </div>
      <div className="form_control">
        <label>Usia</label>
        <input type="text" onChange={usiaOnChangeHandle}></input>
      </div>
      <button type="submit" className="form_actions">
        Submit
      </button>
    </form>
  );
};

export default Form;
