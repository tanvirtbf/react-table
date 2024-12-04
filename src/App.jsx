import { useTable } from 'react-table'


function App() {
  const data = [
    {
      id: 1,
      gender: "Male",
      salary: 24000,
    },
    {
      id: 2,
      gender: "Female",
      salary: 12999,
    },
    {
      id: 3,
      gender: "Male",
      salary: 32000,
    },
  ];

  const columns = [
    {
      Header:"ID",
      accessor:"id"
    },
    {
      Header:"Gender",
      accessor:"gender"
    },
    {
      Header:"Salary",
      accessor:"salary"
    },
  ]

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data
  })

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.gender}</td>
              <td>{i.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
