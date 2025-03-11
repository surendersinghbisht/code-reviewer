import {generateResponse} from '../services/ai.service.js';

export const getResponse =  async (req, res) => {
    const {code} = req.body;
try {
    if(!code) {
        res.status(400).send('error');
    }

    const response = await generateResponse(code);

   res.send(response);
} catch (error) {
    res.status(500).json({ message: "Server error" });
}
   
}