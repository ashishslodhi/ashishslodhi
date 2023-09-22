import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
  try {
    const { name, group } = req.body;

    // Check if the user already exists with another group
    const existingUser = await User.findOne({ name });

    if (existingUser) {
      if (existingUser.group !== group) {
        return res
          .status(200)
          .json({ error: 'User already registered with another group' });
      }
      return res.json(existingUser); // Return the existing user if in the same group
    }

    const newUser = new User({ name, group });
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
