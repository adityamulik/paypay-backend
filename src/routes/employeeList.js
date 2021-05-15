const employeeList = {
  method: 'get',
  path: '/api/employees',
  handler: (req, res) => {
    res.send("Get all employees as a list!");
  }
}

export default employeeList;