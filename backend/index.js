const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/error");
require("dotenv").config();
require("./config/db")();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/api/user", userRoutes);
// app.get("/api/chats", async (req, res) => {
//   res.send({ data: chats });
// });

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, console.log(`server started on port ${port}`));
