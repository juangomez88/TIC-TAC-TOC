import express from 'express';
import cors from 'cors';
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
const app = express();

app.use(cors());
app.use(express.json());

const api_key = "stww46cp4uv3";
const api_secret = "7f9xsjxc9vzkhzgaav44tn6k89yrsp6f3wckrf62h8aupkufsch3f53pvcaxfafw";
const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/singup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createToken(userId);
        res.json({ token, userId, firstName, lastName, username, hashedPassword })
    } catch (error) {
        res.json(error)
    }
});

app.post("/login");

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
