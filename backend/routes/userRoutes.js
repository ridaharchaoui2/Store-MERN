import express from "express";
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route: /api/users
// Description: Register user (Public) & Get all users (Private/Admin)
// protect runs FIRST, then admin
router.route("/").post(registerUser).get(protect, admin, getUsers);

// Route: /api/users/login
// Description: Auth user & get token (Public)
router.post("/login", authUser);

// Route: /api/users/logout
// Description: Logout user (Public/Private)
router.post("/logout", logoutUser);

// Route: /api/users/profile
// Description: Get & Update user profile (Private)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Route: /api/users/:id
// Description: Get, Delete, Update user by ID (Private/Admin)
// FIXED: protect runs FIRST, then admin
router
  .route("/:id")
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);

export default router;
