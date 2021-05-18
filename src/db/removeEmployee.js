import queryDB from './db';

const removeEmployee = async (id) => {

  const results = await (await queryDB(`DELETE FROM employee WHERE employee_id=?`, 
                        [id])).all();
                        

  let message = 'Error in deleting employee.'

  if(results.affectedRows == 1) {
    message = 'Employee deleted successfully.'
  }

  console.log(message);

  return {message};
};

export default removeEmployee;