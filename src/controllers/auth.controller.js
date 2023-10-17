import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, username } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({
        message: "correo ya esta en uso",
      });
    // creating the user
    const newUser = new User({
      username,
      email,
    });
    // saving the user in the database
    const userSaved = await newUser.save();

    res.json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
