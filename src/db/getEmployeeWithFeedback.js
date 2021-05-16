import getEmployees from './getEmployees';
import getFeedback from './getFeedback';

const getEmployeeWithFeedback = async() => {
  const employees = await getEmployees();
  const feedbacks = await getFeedback();

  const employeeWithFeedback = employees.map(employee => ({
    ...employee,
    feedback: feedbacks.find(feedback => feedback.employee_id === employee.employee_id)
  }))

  console.log(employeeWithFeedback);
  return employeeWithFeedback;
};

export default getEmployeeWithFeedback;