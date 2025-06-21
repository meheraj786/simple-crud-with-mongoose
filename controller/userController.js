// let Dev = [
//   {
//     id: 1,
//     name: "Darnell Marquardt",
//     email: "Braden_Block@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Darnell Marquardt",
//     email: "Marquardt@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Darnell Victoria ",
//     email: "Darnell@gmail.com",
//   },
//   {
//     id: 4,
//     name: "Victoria  Marquardt",
//     email: "Victoria@gmail.com",
//   },
// ];
const Dev = require("../models/Dev");

// get all user
let getAllUser = async (req, res) => {
  try {
    const allUsers = await Dev.find();

    res.json({
      status: true,
      users: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// get a single user
let getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const dev = await Dev.findById(id);
    res.json({
      status: true,
      dev,
    });
  } catch (err) {
    console.log(err);
  }
};

// create a user
let createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new Dev({ name, email });
    const data = await newUser.save();

    res.json({
      message: "Dev created",
      data,
    });
  } catch (err) {
    res.status(500).json({ status: false, error: err.message });
  }
};

// update a user
let editUser = async(req, res) => {
  const { id } = req.params;
try {
    const dev = await Dev.findByIdAndUpdate(id,req.body);
    res.json({
      status: true,
      dev,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete a user
let deteleUser = async(req, res) => {
  const { id } = req.params;

  try {
    const dev = await Dev.findByIdAndDelete(id,req);
    res.json({
      status: true,
      dev,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  editUser,
  deteleUser,
};
