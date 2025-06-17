import express from "express";
import { User } from "../models/user.model";
import { AuthUser } from "../models/auth.model";

const router = express.Router();

router.post("/login", (req, res) => {
  // recieves a loginModel

  const user: User = {
    username: "Connor",
  };

  const authUser: AuthUser = {
    token: "12345",
  };

  res.status(200).send({ user, authUser });
});

export default router;
