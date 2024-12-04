
function App() {

  const data = [
    {
      id: 1, 
      gender: 'Male',
      salary: 24000
    },
    {
      id: 2, 
      gender: 'Female',
      salary: 12999,
    },
    {
      id: 3, 
      gender: 'Male',
      salary: 32000
    }
  ]

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <td>22000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Male</td>
            <td>36000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
