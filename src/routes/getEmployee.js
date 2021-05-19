import getEmployeeFeedback from '../db/getEmployeeFeedback';

const getEmployee = {
  method: 'get',
  path: '/api/employee/feedback/:id',
  handler: async (req, res) => {
    try {
      let results = await getEmployeeFeedback(req.params.id);
      res.json(results);
    }
    catch(err) {
      console.log(`Error ${err}`);
    }
  }
}

export default getEmployee;