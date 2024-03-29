import express from "express";
import cors from "cors";
const app = express();

// routes
import userRouter from "./app/modules/user/user.routes";
import donationPostRouter from "./app/modules/donation/donation.routes";
import donatedDataRouter from "./app/modules/donated/donated.routes";

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// users route
app.use("/api/v1/users", userRouter);

// donation posts routes
app.use("/api/v1/posts", donationPostRouter);
// donation posts routes
app.use("/api/v1/donated", donatedDataRouter);

export default app;
