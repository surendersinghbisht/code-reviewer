import dotenv from "dotenv";
import express from 'express';
import aiRoute from './routes/ai.routes.js';
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use('/ai', aiRoute)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});