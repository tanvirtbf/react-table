import { useTable } from "react-table";

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
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

function App() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr key={hg} {...hg.getHeaderGroupProps()}>
              {hg.headers.map((header) => (
                <th key={header} {...header.getHeaderProps()}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row) => {
              prepareRow(row)
              return <tr key={row} {...row.getRowProps()} >
                {
                  row.cells.map((cell) => (
                    <td {...cell.getCellProps()} key={cell}>{cell.render('Cell')}</td>
                  ))
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
