import { Router } from "express";
import { getUserGreeting, createUser } from "../controller/user.js";

const router = Router();

router.get('/user', getUserGreeting);
router.post('/user', createUser);

export default router;