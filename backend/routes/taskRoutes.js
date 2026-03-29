import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js"; // Auth middleware
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// All routes are protected
router.use(protect);

// Create a task
router.post("/", createTask);

// Get all tasks
router.get("/", getTasks);

// Get single task
router.get("/:id", getTaskById);

// Update task
router.put("/:id", updateTask);

// Delete task
router.delete("/:id", deleteTask);

router.delete("/:id", protect, authorize("admin"), deleteTask);

export default router;
