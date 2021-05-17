import getEmployees from './getEmployees';
import getFeedback from './getFeedback';

const getEmployeeWithFeedback = async() => {
  const employees = await getEmployees();
  const feedbacks = await getFeedback();

  const employeeWithFeedback = employees.map(employee => ({
    ...employee,
    feedback: Array(feedbacks.find(feedback => feedback.employee_id === employee.employee_id))
  }))
  
  return employeeWithFeedback;
};

export default getEmployeeWithFeedback;