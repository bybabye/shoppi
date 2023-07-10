import UserModel from "../models/UserModel.js";
import { v4 as uuidv4 } from "uuid";
export const addUser = async (req, res) => {
  const { name, cmnd, avatar, supplierId } = req.body;

  //uuid and supplier id
  /**
   * uid -> google id
   */

  /**
   * supplier Id -> uuidv4
   */
  const newUser = new UserModel({
    uid: uuidv4(),
    name,
    cmnd,
    avatar,
    supplierId,
  });
  try {
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving user");
  }
};
export const updateProfile = async (req, res) => {
  const { uid, name, cmnd, avatar } = req.body;

  try {
    const User = await UserModel.find({ uid });
    await UserModel.updateOne(
      { uid },
      {
        $set: {
          name: name ?? User.name,
          cmnd: cmnd ?? User.cmnd,
          avatar: avatar ?? User.avatar,
        },
      },
      {
        upsert: true,
      }
    );

    res.status(200).send("Update User Successfully!");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
