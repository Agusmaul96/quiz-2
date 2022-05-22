import "./Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Nama</td>
          <td>Program Kelas</td>
          <td>Domisili</td>
          <td>Usia</td>
        </tr>
      </thead>

      <tbody>
        {props.students.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.program}</td>
              <td>{item.live}</td>
              <td>{item.usia}</td>
            </tr>
          );
        })}
        ;
      </tbody>
    </table>
  );
};

export default Table;
