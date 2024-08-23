const express = require("express")
const router = express.Router()
const {createLead,deleteLead, getLeads} = require("../controllers/LeadController")

router.get("/", getLeads)

router.post("/", createLead)


router.delete("/:id", deleteLead)


module.exports = router