const express = require("express");
const router = express.Router();
const Employee = require("../model/Employee");
const employeesController = require("../controllers/employees-controller");

router.get("/", employeesController.getAllEmployees);
router.post("/", employeesController.addEmployee);
router.get("/:eid", employeesController.getById);
router.put("/:eid", employeesController.updateEmployee);
router.delete("/:eid", employeesController.deleteEmployee);

module.exports = router;
