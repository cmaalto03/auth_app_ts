import express from "express";

import hello_route from "./routes/helloWorld";

const router = express.Router();

router.use("/hello", hello_route);

export default router;
