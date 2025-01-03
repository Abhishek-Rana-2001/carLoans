const express = require("express")
const router = express.Router()
const {createLead,deleteLead, getLeads, downloadLeads} = require("../controllers/LeadController")

router.get("/", downloadLeads)
router.post("/", createLead)
router.delete("/:id", deleteLead)


module.exports = router