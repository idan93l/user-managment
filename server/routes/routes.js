import express from "express";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);

// router.get("/user", updateUser);

export default router;