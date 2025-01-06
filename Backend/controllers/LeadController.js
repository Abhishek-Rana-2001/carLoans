const Lead = require("../models/lead");
const CsvParser = require("json2csv").Parser;

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    if (leads) {
      res.status(201).send(leads);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const downloadLeads = async (req, res) => {
  try {
    const leads = await Lead.find({}).select(["-_id", "-__v"]);
    // res.status(200).json(leads)
    const csvFields = [
      // " route",
      // "street_number",
      "postal_code",
      "locality",
      // "administrative_area_level_1_short",
      // "idev",
      // "key",
      "cartype",
      // "afid",
      // "lid",
      // "did",
      // "vehicletype",
      "budget",
      "vehicle",
      "credit",
      "emp",
      "income",
      // "emp_length",
      // "emp_length_months",
      "companyname",
      "jobtitle",
      // "dlocation",
      // "formatted_address",
      "addresslength",
      "addresslength_months",
      "rentownhome",
      "home_monthly",
      "dob",
      "fname",
      "lname",
      "phone",
      "email",
      // "acceptCasl",
    ];
    const csvParser = new CsvParser({csvFields});
    const userData = csvParser.parse(leads);
    res.setHeader("Content-Type", "text/csv")
    res.setHeader("Content-Disposition", "attachment: filename=leadData.csv")
    res.status(200).end(userData);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const createLead = async (req, res) => {
  const leadData = req.body;
  try {
    const lead = await Lead.create(leadData);
    if (lead) {
      res.status(201).json(lead);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteLead = async (req, res) => {
  const id = req.params.id;
  try {
    const lead = await Lead.findByIdAndDelete(id);
    if (lead) {
      res.status(200).json({ message: "Lead deleted successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createLead, deleteLead, getLeads, downloadLeads };
