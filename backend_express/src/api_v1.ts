import express from "express";

import auth_route from "./routes/auth";

const router = express.Router();

router.use("/auth", auth_route);

export default router;
