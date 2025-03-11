import {generateResponse} from '../services/ai.service.js';

export const getResponse =  async (req, res) => {
    const {code} = req.body;

    if(!code) {
        res.status(400).send('error');
    }

    const response = await generateResponse(code);

   res.send(response);
}