const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
  let employee;
  try {
    employee = await Employee.find();
    res.status(200).send(employee)
  } catch (err) {
    console.log(err);
    res.send(err)
  }

  
};

const getById = async (req, res) => {
  
  let employee;
  try {
    employee = await Employee.findById(req.params.eid);
    res.status(200).send(employee)
  } catch (err) {
    console.log(err);
    res.send(err)
  }
  
};

const addEmployee = async (req, res) => {
  const { first_name,last_name,email,gender,salary} = req.body;
  let employee;
  try {
    employee = new Employee({
      first_name,
      last_name,
      email,
      gender,
      salary,
    });
    await employee.save();
    res.send(employee)
    res.status(201)
  } catch (err) {
    res.send(err)
    console.log(err);
  }


};

const updateEmployee = async (req, res) => {
  const id = req.params.eid;
  const { first_name,last_name,email,gender,salary } = req.body;
  let employee;
  try {
    employee = await Employee.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      gender,
      salary
    });
     await Employee.save();
     res.status(200).send(employee)
  } catch (err) {
    
    res.send(err)
  }
  
};

const deleteEmployee = async (req, res) => {
  let employee;
  try {
    employee = await Employee.findByIdAndDelete(req.params.eid);
    if (!employee) {
    res.status(204).send("Deleted Successfully")
  };
  } catch (err) {
    
    res.status(404).send(err);
  }
  
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.getById = getById;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee= deleteEmployee;
