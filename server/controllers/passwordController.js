// controllers/passwordController.js
import Password from '../models/Password.js';

// Create a new password entry
export const createPassword = async (req, res) => {
  try {
    const { userid, password } = req.body;
    const newPassword = new Password({ userid, password });
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a password by ID
export const getPasswordById = async (req, res) => {
  try {
    const password = await Password.findById(req.params.id);
    if (!password) return res.status(404).json({ message: 'Password not found' });
    res.json(password);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a password
export const updatePassword = async (req, res) => {
  try {
    const updatedPassword = await Password.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPassword) return res.status(404).json({ message: 'Password not found' });
    res.json(updatedPassword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a password
export const deletePassword = async (req, res) => {
  try {
    const deletedPassword = await Password.findByIdAndDelete(req.params.id);
    if (!deletedPassword) return res.status(404).json({ message: 'Password not found' });
    res.json({ message: 'Password deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
