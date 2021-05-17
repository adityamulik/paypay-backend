import queryDB from './db';

const createEmployee = async (employee) => {

  const results = await (await queryDB(`INSERT INTO employee(name, role, email, performance_review) VALUES ('Sridhar Nagaraj', 'VP', 'sridhar.nagaraj1@gmail.com', 'Mentor & idol!')`)).all();

  let message = 'Error in creating employee.'

  if(results.affectedRows == 1) {
    message = 'Employee created successfully.'
  }

  return {message};
};

export default createEmployee;