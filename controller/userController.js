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

// edit a user
let editUser = (req, res) => {
  const { id } = req.params;
  Dev.map((user) => {
    if (user.id == id) {
      user.email = req.body.email;
    }
  });
  res.json({
    status: "User is Update",
    Dev,
  });
};

// delete a user
let deteleUser = (req, res) => {
  const { id } = req.params;

  Dev = Dev.filter((user) => user.id != id);
  res.json({
    status: true,
    Dev,
  });
};

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  editUser,
  deteleUser,
};
