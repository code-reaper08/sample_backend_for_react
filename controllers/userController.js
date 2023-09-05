const userSchema = require("../models/userModel");

// CREATE A USER
exports.createUser = async (req, res) => {
  try {
    const newUser = await userSchema.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create user", message: err.message });
  }
};

// GET A USER BY ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userSchema.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch user", message: err.message });
  }
};

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userSchema.find({});
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch users", message: err.message });
  }
};

// EDIT A USER DATA
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await userSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update user", message: err.message });
  }
};

// DELETE A USER
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userSchema.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(deletedUser);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete user", message: err.message });
  }
};
