import Task from "../models/Task.js";
import { taskSchema } from "../utils/validation.js";
// @desc Create task
// @route POST /api/v1/tasks
// @access Private

export const createTask = async (req, res) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const task = await Task.create({ ...req.body, user: req.user._id });
  res.status(201).json(task);
};

// @desc Get all tasks for user
// @route GET /api/v1/tasks
// @access Private
export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

// @desc Get task by ID
// @route GET /api/v1/tasks/:id
// @access Private
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) res.json(task);
  else res.status(404).json({ message: "Task not found" });
};

// @desc Update task
// @route PUT /api/v1/tasks/:id
// @access Private
export const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    Object.assign(task, req.body);
    await task.save();
    res.json(task);
  } else res.status(404).json({ message: "Task not found" });
};

// @desc Delete task
// @route DELETE /api/v1/tasks/:id
// @access Private
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
