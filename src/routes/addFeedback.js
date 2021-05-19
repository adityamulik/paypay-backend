import createFeedback from '../db/createFeedback';

const addFeedback = {
  method: 'post',
  path: '/api/employees/:employee_id/feedback',
  handler: async (req, res) => {
    try {
      let results = await createFeedback(req.params.id, req.body);
      res.json(results);
    }
    catch(err) {
      console.log(`Error in creating feedback, ${err}`);
    }
  }
}

export default addFeedback;