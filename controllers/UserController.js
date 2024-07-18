import userModel from "../models/userModel.js";

export const CreateUser = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      res.status(400).json({
        success: false,
        message: "All input are required ",
      });
    }

    const user = await userModel.create({ name, phone, email, password });
    res.status(201).json({
      success: true,
      message: "user created Successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "All input are required ",
      error: error,
    });
  }
};

export const AllUserData = async (req, res) => {
  try {
    const allUser = await userModel.find();
    res.status(200).json({
      success: true,
      count: allUser.length,
      message: "All User data fetching successfully",
      users: allUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while fetching data",
      error: error.message,
    });
  }
}; 

export const UpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const user = await userModel.findByIdAndUpdate(id, req.body,{new:true})
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating data",
      error: error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while deleting data",
      error: error,
    });
  }
};
