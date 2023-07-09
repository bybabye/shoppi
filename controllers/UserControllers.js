import UserModel from "../models/UserModel.js";

export const addUser = async (req, res) => {
  const { uid, name } = req.body;
  console.log(uid, name);

  const newUser = new UserModel({ uid, name });
  console.log(newUser);
  try {
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving user");
  }
};
