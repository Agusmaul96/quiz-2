import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Table from "./component/Table";
function App() {
  const DUMMY_STUDENT = [{ name: "Agus Maulana", program: "frontend", live: "serang", usia: "23 Tahun" }];

  const [studentData, setStudentData] = useState(DUMMY_STUDENT);

  const addStudent = (data) => {
    setStudentData([...studentData, data]);

    console.log("data app.js", data);
  };

  return (
    <div className="app">
      <header>
        <h1>Quiz Agus Maulana 2 dan 3</h1>
      </header>
      <Form onAddStudent={addStudent} />

      <Table students={studentData} />
    </div>
  );
}
export default App;
