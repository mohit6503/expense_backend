import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import transactionRoutes from "./route/transaction.route.js";

dotenv.config(
  {
    path:'./.env'
  }
);

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.post('/', (req, res) => {
  res.json("all is well");
}); 

const port = process.env.PORT || 2222;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
app.use('/api', transactionRoutes);

export default app;
