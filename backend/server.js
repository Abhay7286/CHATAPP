import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // to parse the incoming cookies from req.cookie

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", usersRoutes)

// app.get("/", (req, res) => {
//   res.send('Hello World!')
// });

app.listen(PORT, () => {
  connectToMongoDb()
  console.log(`Server Running on port ${PORT}`)
})