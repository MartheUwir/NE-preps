import express from 'express';
import { getAllOwners,getOwners, createOwner,  } from '../controllers/owners.controller.js';
import authenticate from '../middlewares/auth.middleware.js';
import { validateOwnerRegistration} from '../validators/owners.validate.js';
const router = express.Router();

router.get("/", getOwners);
router.get("/all", getAllOwners);
router.post("/register",  validateOwnerRegistration, createOwner)

export default router;
